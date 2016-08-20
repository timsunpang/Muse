const React = require('react');
const Banner = require('./banner');
const Join = require('./join');
const RandomTracks = require('../tracks/random_tracks');
const LogInModal = require('../session/log_in_modal');
const SignUpModal = require('../session/sign_up_modal');


module.exports = React.createClass({
  render: function(){
      return(
        <div>
          <SignUpModal/>
          <LogInModal/>
          <Banner/>
          <RandomTracks/>
          <Join/>
        </div>
      )
  }
});
