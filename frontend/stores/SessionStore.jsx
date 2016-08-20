const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ActionTypes = require('../constants/app_constants.js').ActionTypes;
var SessionStore = new Store(AppDispatcher);

var _currentUser = {};
// var _login = function(user){
//   // console.log("logging in");
//   _currentUser = user;
//   SessionStore.__emitChange();
// };
// var _logout = function(){
//   _currentUser = {};
//   SessionStore.__emitChange();
// };

var _receiveCurrentUser = function(user){
  _currentUser = user;
  console.log("currentuser is:");
  console.log(_currentUser.username);
};

SessionStore.currentUser = function(){
  return _currentUser;
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
    console.log("logging in");
    _login(user);
    break;
  case ActionTypes.LOGOUT_RESPONSE:
    _logout();
    break;
  case ActionTypes.RECEIVE_CURRENT_USER:
    console.log("in session store");
    _receiveCurrentUser(user);
    SessionStore.__emitChange();
    break;
  }
};

module.exports = SessionStore;
