var React = require('react');

class Login extends React.Component{
  constructor(props){
      super(props);
      this.authenticateUser = this.authenticateUser.bind(this);
      this.state={
        isAuthenticUser: props.isAuthenticUser,
        showLoginFailedMessage: false
      };
  }

  authenticateUser(e){
    e.preventDefault();
    var userId = this.refs.username.value;
    var password = this.refs.password.value;

    this.props.authenticateUser(userId, password);
  }

  render(){
    if(this.props.isAuthenticUser == undefined || this.props.isAuthenticUser == true){
      return (
        <div className='login-page'>
        <div className='aero'>
          <div className="row ">
            <div  className="column small-centered medium-10 large-12">
              <label className="signInHeader">Sign In</label>
            </div>
          </div>
          <div className="row ">
            <div  className="column small-centered medium-10 large-12">
              <input type="text" ref="username" placeholder="FedEx Id" className="fields"></input>
            </div>
          </div>
          <div className="row">
            <div  className="column small-centered medium-10 large-12">
              <input type="password" ref="password" placeholder="Password" className="fields"></input>
            </div>
          </div>
          <div className="row">
            <div  className="column small-centered medium-10 large-12">
              <input type="button" value="Log In" onClick={this.authenticateUser}
                className="signInButton">
              </input>
            </div>
          </div>
        </div>
      </div>
      );
    }else{
      return (
        <div className='login-page'>
        <div className='aero'>
          <div className="row ">
            <div  className="column small-centered medium-10 large-12">
              <label className="signInHeader">Sign In</label>
            </div>
          </div>
          <div className="row ">
            <div  className="column small-centered medium-10 large-12">
              <input type="text" ref="username" placeholder="FedEx Id" className="fields"></input>
            </div>
          </div>
          <div className="row">
            <div  className="column small-centered medium-10 large-12">
              <input type="password" ref="password" placeholder="Password" className="fields"></input>
            </div>
          </div>
          <div className="row">
            <div  className="column small-centered medium-10 large-12">
              <input type="button" value="Log In" onClick={this.authenticateUser}
                className="signInButton">
              </input>
            </div>
          </div>

          <div className="row">
            <div className="column small-centered medium-10 large-12">
              <label ref="message" className="errorMessage">You are not an authorized user.</label>
            </div>
          </div>
        </div>
        </div>
      );
    }

  }
}

export default Login;
