const React = require('react');
const ReactDOM = require('react-dom');
const Router = require("react-router").Router;
const Route = require("react-router").Route;
const IndexRoute = require("react-router").IndexRoute;
const App = require('./components/app');
const Home = require('./components/home/home');
const Discover = require('./components/discover/discover');


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/discover" component={Discover}/>
  </Route>
)
