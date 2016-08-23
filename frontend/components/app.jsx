const React = require('react');
const Player = require('./player/player');
const Footer = require('./footer/footer');
const Navbar = require('./nav/navbar');
const LogInModal = require('./session/log_in_modal');
const SignUpModal = require('./session/sign_up_modal');


module.exports = React.createClass({
  render: function(){
      return(
        <div>
          <SignUpModal/>
          <LogInModal/>
          <Navbar/>
          {this.props.children}
          <Player/>
          <Footer/>
        </div>
      )
  }
});
