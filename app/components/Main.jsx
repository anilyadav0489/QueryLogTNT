import React from 'react';
import Filters from 'Filters';
import DataTable from 'DataTable';
import firebase, {firebaseRef} from 'initDB';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.handleSelectQuery = this.handleSelectQuery.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.deleteQuery = this.deleteQuery.bind(this);
    this.state = {selectedQuery: undefined, queries:[]};
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
      that.setState({selectedQuery: queryToUpdate});
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
    firebaseRef.child('queries').push(queryObj).then(()=>{
      this.setState({...this.state, selectedQuery: undefined});
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
      that.setState({selectedQuery: undefined});
      console.log('Delete called successfull');
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
          </div>
        </div>
      </div>
    );
  }

}

export default Main;
