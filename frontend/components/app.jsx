const React = require('react');
const Player = require('./player/player');
const Footer = require('./footer/footer');
const Navbar = require('./nav/navbar')

module.exports = React.createClass({
  render: function(){
      return(
        <div>
          <Navbar/>
          {this.props.children}
          <Player/>
          <Footer/>
        </div>
      )
  }
});
