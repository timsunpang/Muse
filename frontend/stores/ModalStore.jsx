const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ActionTypes = require('../constants/app_constants.js').ActionTypes;
var ModalStore = new Store(AppDispatcher);

var _modalStatus = {
  "signup": false,
  "login": false
};

ModalStore.__onDispatch = function (payload) {
  var actionType = payload.actionType;

  switch(actionType) {
    case ActionTypes.CLOSE_SIGNUP_MODAL:
      modalToggle(false, "signup");
      break;
    case ActionTypes.OPEN_SIGNUP_MODAL:
      modalToggle(true, "signup");
      break;
    case ActionTypes.CLOSE_LOGIN_MODAL:
      modalToggle(false, "login");
      break;
    case ActionTypes.OPEN_LOGIN_MODAL:
      modalToggle(true, "login");
      break;
  }
};

var modalToggle = function(boolean, type){
  _modalStatus[type] = boolean;
  ModalStore.__emitChange();
};

ModalStore.checkModalStatus = function(type){
  return _modalStatus[type];
};

module.exports = ModalStore;
