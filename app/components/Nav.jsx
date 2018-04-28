var React = require('react');
var {Link} = require('react-router-dom');
//var {connect} = require('react-redux');

class Nav extends React.Component{

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu ">
            <li className="menu-text">TNT Query Log</li>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li>
                <a href="https://www.linkedin.com/in/anil-yadav-53b67333/" target="_blank">created by Anil Yadav</a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
};

export default Nav;
