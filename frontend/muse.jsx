const React = require('react');
const ReactDOM = require('react-dom');
const SessionActions = require('./actions/sessionActions.js');
const SessionStore = require('./stores/SessionStore.jsx');
const Router = require("react-router").Router;
const Route = require("react-router").Route;
const browserHistory = require("react-router").browserHistory;
const createHistory = require('history').createHistory;
const IndexRoute = require("react-router").IndexRoute;
const routes = require("./routes");

var router = (
  <Router routes={routes} history={browserHistory} />
)

var MyComponent = React.createClass({
  getInitialState: function(){
    return {
      currentUser: SessionStore.currentUser(),
      isLoggedIn: SessionStore.isUserLoggedIn()
    }
  },

  componentDidMount: function(){
    this.sessionListener = SessionStore.addListener(this._onChange);
    SessionActions.login({username:"tom",password:"password2"});
  },

  componentWillUnmount: function(){
    this.sessionListener.remove();
  },

  _onChange: function(){
    this.setState(this.getInitialState());
  },

  render() {
    // var newUser = {username:"likdferdfreder",password:"password", email:"tjsidfdffdlaerwfns@gmail.com"};
    // var user = {username:"tom",password:"password2"};
    // var button_text = this.state.isLoggedIn ? "Log Out" : "Sign In"
    // var button_action = this.state.isLoggedIn ? SessionActions.logout : SessionActions.login
    //
    // var currentUser = this.state.currentUser.id ? this.state.currentUser.username : ""
    // return(
    //   <div>
    //     <div>Hello World</div>
    //     <div>CurrentUser: {currentUser}</div>
    //     <div><button onClick={button_action}>{button_text}</button></div>
    //   </div>
    // );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(router, document.getElementById('main'));
});
