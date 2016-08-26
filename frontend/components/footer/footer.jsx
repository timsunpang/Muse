const React = require('react');
const Footer = require("react-bootstrap").Footer;
const Navbar = require("react-bootstrap").Navbar;
const Nav = require("react-bootstrap").Nav;
const NavItem = require("react-bootstrap").NavItem;

module.exports = React.createClass({
  render: function() {

    return (
      <div>
        <Navbar fixedBottom inverse>
          <Nav>

            <NavItem href="https://github.com/timsunpang/Muse">GitHub</NavItem>
            <NavItem href="http://www.joshua-hwang.com">Josh</NavItem>
            <NavItem href="http://www.rodrigocardenas.xyz">Rodrigo</NavItem>
            <NavItem href="https://github.com/timsunpang">Tim</NavItem>


          </Nav>
        </Navbar>
      </div>
    );
  }
});
