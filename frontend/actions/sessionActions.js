const SessionAPIUtil = require('../util/sessionApiUtil.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const ActionTypes = require('../constants/app_constants.js').ActionTypes;

var sessionActions = {
  signup: function (user_args) {
    // Add signing in modal dispatcher
    SessionAPIUtil.signup(user_args, sessionActions.receiveCurrentUser, sessionActions.receiveAuthErrors);
  },
  login: function (user_args) {
    // Add logging in modal dispatcher
    console.log("sessionActions: login");
    console.log(user_args);
    SessionAPIUtil.login(user_args, sessionActions.receiveCurrentUser);
  },
  logout: function () {
    // Add logging out modal dispatcher
    SessionAPIUtil.logout(sessionActions.receiveCurrentUser);
  },
  receiveCurrentUser: function(response){
    console.log(response);
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_CURRENT_USER,
      response: response
    })
  },
  receiveAuthErrors: function(errorMsg){
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_USER_ERROR,
      response: errorMsg
    })
  },
  closeSignUpModal: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.CLOSE_SIGNUP_MODAL
    })
  },
  openSignUpModal: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.OPEN_SIGNUP_MODAL
    })
  },
  closeLogInModal: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.CLOSE_LOGIN_MODAL
    })
  },
  openLogInModal: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.OPEN_LOGIN_MODAL
    })
  },
}

module.exports = sessionActions;
