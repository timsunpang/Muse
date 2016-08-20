const React = require('react');
const Link = require('react-router').Link;
const Navbar = require("react-bootstrap").Navbar;
const Nav = require("react-bootstrap").Nav;
const NavItem = require("react-bootstrap").NavItem;
const NavDropdown = require("react-bootstrap").NavDropdown;
const MenuItem = require("react-bootstrap").MenuItem;
const browserHistory = require("react-router").browserHistory;
const SessionActions = require('../../actions/sessionActions');

module.exports = React.createClass({

  _handleDiscover: function(e){
    e.preventDefault();
    browserHistory.push('/discover');
  },

  _handleHome: function(e){
    e.preventDefault();
    browserHistory.push('/');
  },

  _handleLogIn: function(e){
    e.preventDefault();
    SessionActions.openLogInModal();
  },

  _handleSignUp: function(e){
    e.preventDefault();
    SessionActions.openSignUpModal();
  },

  render: function(){
      var handleDiscover = this._handleDiscover;
      var handleHome = this._handleHome;
      var handleLogIn = this._handleLogIn;
      var handleSignUp = this._handleSignUp;

      return(
        <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#" onClick={handleHome}>Muse</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#" onClick={handleDiscover}>Discover</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#" onClick={handleSignUp}>Sign Up</NavItem>
                <NavItem eventKey={2} href="#" onClick={handleLogIn}>Log In</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
  }
});
