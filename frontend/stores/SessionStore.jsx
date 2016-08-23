const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ActionTypes = require('../constants/app_constants.js').ActionTypes;
var SessionStore = new Store(AppDispatcher);

var _currentUser = {};
var _errors = [];

var _receiveCurrentUser = function(user){
  _currentUser = user;
  _errors = [];
  console.log("currentuser is:" + _currentUser.username);
};

var _receiveUserErrors = function(errorMsg){
  _errors = errorMsg.responseJSON;
};

SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.errors = function(){
  return _errors;
};

SessionStore.isUserLoggedIn = function(){
  if (_currentUser.id){
    return true;
  } else {
    return false;
  }
};

SessionStore.__onDispatch = function (payload) {
  var user = payload.response;
  var actionType = payload.actionType;

  switch(actionType) {
    case ActionTypes.LOGIN_RESPONSE:
      console.log("Session Store: Login Received");
      _login(user);
      break;
    case ActionTypes.LOGOUT_RESPONSE:
    console.log("Session Store: Logout");
      _logout();
      break;
    case ActionTypes.RECEIVE_CURRENT_USER:
      console.log("Session Store: Current User Received");
      _receiveCurrentUser(user);
      SessionStore.__emitChange();
      break;
    case ActionTypes.RECEIVE_USER_ERROR:
      console.log("Session Store: Errors Received");
      _receiveUserErrors(payload.response);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
