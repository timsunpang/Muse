const React = require('react');
const Banner = require('./banner');
const Join = require('./join');
const RandomTracks = require('../tracks/random_tracks');

module.exports = React.createClass({
  render: function(){
      return(
        <div>
          <Banner/>
          <RandomTracks/>
          <Join/>
        </div>
      )
  }
});
