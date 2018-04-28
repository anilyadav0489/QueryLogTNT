import React from 'react';
import moment from 'moment';
import Row from 'Row';

class DataTable extends React.Component {
  constructor(props){
    super(props);
    var loadingMessage = 'Loading queries...';
    var queries = this.props.queries;
    this.handleSelectQuery = this.handleSelectQuery.bind(this);
    this.handleDeleteQuery = this.handleDeleteQuery.bind(this);

    this.state = {queries, loadingMessage};
  }

  componentWillUpdate(nextProps, nextState){
    var loadingMessage = '';
    var queries = nextProps.queries;
    if(nextProps.queries == undefined){
      loadingMessage = 'Loading queries...';
      this.setState({queries, loadingMessage});
    } else if(nextProps.queries != nextState.queries && nextProps.queries.length < 1){
      loadingMessage = 'No query has been added yet.';
      this.setState({queries, loadingMessage});
    }
  }

  handleSelectQuery(query){
    this.props.onSelectQuery(query);
  }

  handleDeleteQuery(query){
    this.props.onDeleteQuery(query);
  }

  render (){
    var that = this;
    var queries = undefined;
    queries = this.props.queries;

    if((queries ==null || queries==undefined || queries.length == 0)){
          return (
            <div className = "data-table">
              <table className="table">
                <thead>
                  <Row key="0" isHeader={true}></Row>
                </thead>
                <tbody>
                  <tr >
                    <td colSpan="6" >{that.state.loadingMessage}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
      }else {
        return (
            <div>
              <div className = "data-table">
                <table className="table">
                  <thead>
                    <Row key="0" isHeader={true}></Row>
                  </thead>
                  <tbody>
                    {queries.map(function(query, index){
                          return (<Row key={index}
                            query={query}
                            onSelectQuery = {that.handleSelectQuery}
                            onDeleteQuery = {that.handleDeleteQuery}
                            isHeader={false}></Row>);
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        );
      }
  }

}

export default DataTable;
