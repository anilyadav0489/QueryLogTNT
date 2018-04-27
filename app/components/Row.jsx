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
        <tr onClick={this.onRowSelection}>
          <th width="40px">Q No.</th>
          <th width="150px">Created on</th>
          <th >Name</th>
          <th >Query</th>
          <th >Comments</th>
          <th ></th>
        </tr>);
    }else{
      return (
        <tr onClick={this.onRowSelection}>
          <td width="40px">{query.queryNumber}</td>
          <td width="150px">{query.createdAt}</td>
          <td>{query.name}</td>
          <td>{query.query}</td>
          <td>{query.comments}</td>
          <td width="100px">
            <input type="button" value="Delete" onClick={this.deleteQuery}/>
          </td>
        </tr>);
    }
  }
}

export default Row;
