import React from 'react';
import Filters from 'Filters';
import DataTable from 'DataTable';
import firebase, {firebaseRef} from 'initDB';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.handleSelectQuery = this.handleSelectQuery.bind(this);
    this.state = {selectedQuery: undefined, queries:[]};
  }


  componentWillMount(){
    var that = this;

    console.log("mount successfull");
    firebase.database().ref('/queries').on('value', function(snapshot) {
      var queries = [];
      queries.push(Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]));
      that.setState({queries});
    });
  }

  updateQuery(queryToUpdate){
    console.log("All queries before");
    console.log(this.state.queries[0]);

    this.state.queries[0] = this.state.queries[0].map(query => {
      if(queryToUpdate.queryNumber == query.queryNumber){
        query = queryToUpdate;
      }
      console.log(query.query);
      return query;
    });
    console.log("All queries after");
    console.log(this.state.queries[0]);
    //firebaseRef.child('queries').update(this.state.queries[0]);
  }

  handleUpdateTable(){
    var that = this;

    firebase.database().ref('/queries').on('value', function(snapshot) {
      var queries = [];
      queries.push(Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]));
      that.setState({queries});
    });
  }

  handleSelectQuery(selectedQuery){
    console.log('Query to update', selectedQuery.queryNumber);
    this.setState({selectedQuery});
  }

  handleSaveQuery(query){
    var that = this;
    var queryNumber = this.getNewQueryNumber() || 1;
    var queryObj = {...query, queryNumber};
    firebaseRef.child('queries').push(queryObj);
  }

  getNewQueryNumber(){
    var maxQueryNumber = 0;
    var that = this;
    if(that.state.queries && that.state.queries[0]){
      var maxQueryNumber = Math.max.apply(Math, that.state.queries[0].map(function(o){ return o.queryNumber }));
    }
    return maxQueryNumber + +1;
  }

  render(){
    return (
      <div>
        <div>
          <div>
            <Filters onUpdateTable={this.handleUpdateTable.bind(this)}
                selectedQuery={this.state.selectedQuery}
                onSaveQuery = {this.handleSaveQuery.bind(this)}
                onUpdateQuery = {this.updateQuery.bind(this)}
                onUpdateSelectedQuery = {this.handleUpdateSelectedQuery}/>
            <DataTable onSelectQuery = {this.handleSelectQuery}
                queries={this.state.queries}/>
          </div>
        </div>
      </div>
    );
  }

}

export default Main;
