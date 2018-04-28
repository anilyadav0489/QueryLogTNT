import React from 'react';
import RaisedButtonExampleComplex from 'RaisedButtonExampleComplex';


class Row extends React.Component {
  constructor(props){
    super(props);
    this.onRowSelection = this.onRowSelection.bind(this);
    this.deleteQuery = this.deleteQuery.bind(this);
  }


  onRowSelection(e){
    e.preventDefault();
    var query = this.props.query;
    this.props.onSelectQuery(query);
  }

  deleteQuery(e){
    e.preventDefault();
    var query = this.props.query;
    this.props.onDeleteQuery(query);
  }

  render (){
    var query = this.props.query;
    if(this.props.isHeader){
      return (
        <tr onClick={this.onRowSelection} className="table-header">
          <th width="6%">Q No.</th>
          <th width="15%">Created on</th>
          <th width="15%">Name</th>
          <th width="35%">Query</th>
          <th width="35%">Comments</th>
          <th width="10%"></th>
        </tr>);
    }else{
      return (
        <tr onClick={this.onRowSelection} className='table-row'>
          <td width="6%">{query.queryNumber}</td>
          <td width="15%">{query.createdAt}</td>
          <td width="15%">{query.name}</td>
          <td width="35%">{query.query}</td>
          <td width="35%">{query.comments}</td>
          <td width="10%">
            <input type="button" value="Delete" onClick={this.deleteQuery}/>
          </td>
        </tr>);
    }
  }
}

export default Row;
