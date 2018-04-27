import React from 'react';
import Filters from 'Filters';
import DataTable from 'DataTable';
import firebase, {firebaseRef} from 'initDB';

import SnackbarExampleSimple from 'SnackbarExampleSimple';

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



class Main extends React.Component{
  constructor(props){
    super(props);
    this.handleSelectQuery = this.handleSelectQuery.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.deleteQuery = this.deleteQuery.bind(this);
    this.state = {selectedQuery: undefined, queries:[], snackbarOpen: false, snackbarMessage:''};
  }


  componentWillMount(){
    var that = this;

    console.log("mount successfull");
    firebase.database().ref('/queries').on('value', function(snapshot) {
      var rawQueries = snapshot.val() || {};
      var queries = [];
      Object.keys(rawQueries).forEach((q) => {
        queries.push({
          id: q,
          ...rawQueries[q]
        });
      });
      that.setState({queries});
    });
  }

  updateQuery(queryToUpdate){
    var that = this;
    firebaseRef.child(`queries/${queryToUpdate.id}`).update(queryToUpdate).then(()=>{
      that.setState(
        { selectedQuery: queryToUpdate,
          snackbarMessage: 'Query has been successfully updated.',
          snackbarOpen: true});
    });
  }


  handleSelectQuery(selectedQuery){
    console.log('Query to update', selectedQuery.queryNumber);
    this.setState({selectedQuery, snackbarOpen: false});
  }

  handleSaveQuery(query){
    var that = this;
    var queryNumber = this.getNewQueryNumber() || 1;
    var queryObj = {...query, queryNumber};
    firebaseRef.child('queries').push(queryObj).then(()=>{
      this.setState({...this.state,
        selectedQuery: undefined,
        snackbarMessage: 'Query has been successfully added.',
        snackbarOpen: true});
    });

  }

  getNewQueryNumber(){
    var maxQueryNumber = 0;
    var that = this;
    if(that.state.queries.length > 0){
      var maxQueryNumber = Math.max.apply(Math, that.state.queries.map(function(o){ return o.queryNumber }));
    }
    return maxQueryNumber + +1;
  }

  deleteQuery(query){
    var that = this;
    firebaseRef.child(`queries/${query.id}`).remove().then(()=>{
      that.setState(
        { selectedQuery: undefined,
          snackbarMessage: 'Query has been successfully deleted.',
          snackbarOpen: true});
    });
  }

  render(){
    return (
      <div>
        <div>
          <div>
            <Filters selectedQuery={this.state.selectedQuery}
                onSaveQuery = {this.handleSaveQuery.bind(this)}
                onUpdateQuery = {this.updateQuery.bind(this)} />
            <DataTable onSelectQuery = {this.handleSelectQuery}
               queries={this.state.queries}
               onDeleteQuery = {this.deleteQuery}/>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <SnackbarExampleSimple message={this.state.snackbarMessage} open={this.state.snackbarOpen}/>
            </MuiThemeProvider>

          </div>
        </div>
      </div>
    );
  }

}

export default Main;
