const keyMirror = require("keymirror");

module.exports = {
  ActionTypes: keyMirror({

    // Session
    LOGIN_RESPONSE: null,
    LOGOUT_RESPONSE: null,
    CLIENT_RECEIVED: null,
    SIGNUP_RESPONSE: null,
    RECEIVE_CURRENT_USER: null,
    RECEIVE_USER_ERROR: null,
    CLOSE_SIGNUP_MODAL: null,
    OPEN_SIGNUP_MODAL: null,
    CLOSE_LOGIN_MODAL: null,
    OPEN_LOGIN_MODAL: null
  })
};
