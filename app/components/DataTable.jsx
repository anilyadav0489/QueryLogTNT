import React from 'react';
import moment from 'moment';
import Row from 'Row';

class DataTable extends React.Component {
  constructor(props){
    super(props);
    this.handleSelectQuery = this.handleSelectQuery.bind(this);
    this.state = this.props;
  }

  handleSelectQuery(query){
    this.props.onSelectQuery(query);
  }

  render (){
    var that = this;
    var queries = undefined;
    if(this.props.queries){
      queries = this.props.queries[0];
    }

    if((queries ==null || queries==undefined || queries.length == 0)){
          return (
            <div className = "data-table">
              <table className="hover stack">
                <thead className="data-table-header">
                  <Row key="0" isHeader={true}></Row>
                </thead>
                <tbody>
                  <tr >
                    <td width="10px"></td>
                    <td colSpan="4" className="no-data">No data available</td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
      }else {
        return (
            <div>
              <div className = "data-table">
                <table className="hover ">
                  <thead className="data-table-header">
                    <Row key="0" isHeader={true}></Row>
                  </thead>
                  <tbody>
                    {queries.map(function(query, index){
                          return (<Row key={index}
                            query={query}
                            onSelectQuery = {that.handleSelectQuery}
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
