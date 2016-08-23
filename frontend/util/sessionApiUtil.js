// const React = require('react');
const sessionActions = require('../actions/sessionActions.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const AppConstants = require('../constants/app_constants.js');

var SessionAPIUtil = {
  signup: function(args, success, error) {
    $.ajax({
      dataType: "json",
      url: "api/users",
      method: "POST",
      data: {user: args},
      error: error,
      success: success
    })
  },

  login: function(args, success) {
    $.ajax({
      dataType: "json",
      url: "api/session",
      method: "POST",
      data: {user: args},
      error: function(errorMsg){
        console.log(errorMsg.responseText);
      },
      success: success
    })
  },

  logout: function(success) {
    $.ajax({
      dataType: "json",
      url: "api/session",
      method: "DELETE",
      error: function(){
        console.log("error");
      },
      success: success
    })
  }
};

module.exports = SessionAPIUtil;
