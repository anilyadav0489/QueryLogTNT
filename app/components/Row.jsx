import React from 'react';

class Row extends React.Component {
  constructor(props){
    super(props);
    this.onRowSelection = this.onRowSelection.bind(this);
  }

  onRowSelection(e){
    e.preventDefault();
    var query = this.props.query;
    this.props.onSelectQuery(query);
  }

  render (){
    var query = this.props.query;
    if(this.props.isHeader){
      return (
        <tr onClick={this.onRowSelection}>
          <th width="30px">Q No.</th>
          <th width="150px">Created on</th>
          <th >Name</th>
          <th >Query</th>
          <th >Comments</th>
          <th ></th>
        </tr>);
    }else{
      return (
        <tr onClick={this.onRowSelection}>
          <td width="30px">{query.queryNumber}</td>
          <td width="150px">{query.createdAt}</td>
          <td>{query.name}</td>
          <td>{query.query}</td>
          <td>{query.comments}</td>
          <td width="20px"><input type="button" value="Delete"/></td>
        </tr>);
    }
  }
}

export default Row;
