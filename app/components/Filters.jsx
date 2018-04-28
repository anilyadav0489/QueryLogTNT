import React from 'react';
import moment from 'moment';
import ActionAndroid from 'material-ui/svg-icons/action/android';

var queryNumber = undefined;
class Filters extends React.Component {

  constructor(props){
    super(props);
    console.log();
    this.state = {queryNumber:undefined};
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.selectedQuery){
      this.refs.createdAt.value = this.props.selectedQuery.createdAt;
      this.refs.name.value = this.props.selectedQuery.name;
      this.refs.query.value = this.props.selectedQuery.query;
      this.refs.comments.value = this.props.selectedQuery.comments;
    }
  }


  saveQuery(e){
    e.preventDefault();

    const createdAt = moment().format('MMM DD YYYY');
    const name = this.refs.name.value;
    const query = this.refs.query.value;
    const comments = this.refs.comments.value;
    var queryObj = {createdAt, name, query, comments};

    this.refs.name.value = "";
    this.refs.query.value = "";
    this.refs.comments.value = "";

    this.props.onSaveQuery(queryObj);
  }

  updateQuery(e){
    e.preventDefault();
    const id = this.props.selectedQuery.id;
    const queryNumber = this.props.selectedQuery.queryNumber;
    const createdAt = this.props.selectedQuery.createdAt;
    const name = this.refs.name.value;
    const query = this.refs.query.value;
    const comments = this.refs.comments.value;
    var queryObj = {id, queryNumber, createdAt, name, query, comments};
    this.props.onUpdateQuery(queryObj);

  }


  clearFields(e){
    e.preventDefault();
    //this.refs.createdAt.value = "";
    this.refs.name.value = "";
    this.refs.query.value = "";
    this.refs.comments.value = "";
    this.refs.search.value = "";
  }

  render() {
    var selectedQuery = this.props.selectedQuery;
    return (
      <div>
        <p> </p>
        <div className="row">
          <div className="column small-4 medium-4 large-4">
            Created On:
            <input ref="createdAt" type="input" defaultValue={moment().format('MMM DD YYYY')} placeholder="Creation Date"></input>
          </div>
          <div className="column small-4 medium-4 large-4">
            Name:
            <input ref="name" type="input" placeholder="Name"></input>
          </div>
          <div className="column small-4 medium-4 large-4">
            Search:
            <input ref="search" type="input" placeholder="search"></input>
          </div>
        </div>

        <div className="row">
          <div className="column small-6 center medium-6 large-6">
            Query:
            <textarea ref="query" rows="4" cols="50" placeholder="Query"></textarea>
          </div>
          <div className="column small-6 center medium-6 large-6">
            Comments:
            <textarea ref="comments" rows="4" cols="50" placeholder="comments"></textarea>
          </div>
        </div>

        <div className = "row buttons">
          <div className="column small-3 center medium-3 large-3">
            <input type="button" value="Add" className="button primary expanded"
              onClick={this.saveQuery.bind(this)}></input>
          </div>
          <div className="column small-3 center medium-3 large-3">
            <input type="button" value="Update" className="button primary expanded"
              onClick={this.updateQuery.bind(this)}></input>
          </div>
          <div className="column small-3 center medium-3 large-3">
            <input type="button" value="Reset" className="button primary expanded"
              onClick={this.clearFields.bind(this)}></input>
          </div>
      </div>
      </div>
    );
  }

}

export default Filters;
