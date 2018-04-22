var React = require('react');
//var {connect} = require('react-redux');
var {Link} = require('react-router-dom');

class About extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className='about-page application-top-level'>
        <div className="row">
          <div  className="column small-centered medium-10 large-12">
            <h1 text-center page-title>About</h1>
          </div>
        </div>
        <div className="row">
          <div className="column small-centered medium-10 large-12">
              This app is created for maintaining SOW records for FedEx Projects in Syntel.
              Users can add details for the new SOW and export the details for all the SOW(s) in MS excel format.
            <div className="margin">
              <ul>
                <li>
                  This app is created by Anil Yadav
                </li>
                <li>
                  <a href="https://facebook.github.io/react">React JS </a>
                  - have been used to implement this application.
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
