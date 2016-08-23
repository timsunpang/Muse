const React = require("react");
const Modal = require("react-bootstrap").Modal;
const Input = require("react-bootstrap").Input;
const Button = require("react-bootstrap").Button;
const FormGroup = require("react-bootstrap").FormGroup;
const FormControl = require("react-bootstrap").FormControl;
const ControlLabel = require("react-bootstrap").ControlLabel;
const SessionActions = require('../../actions/sessionActions');
const ModalStore = require('../../stores/ModalStore');
const SessionStore = require('../../stores/SessionStore');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      showModal: ModalStore.checkModalStatus("signup"),
      errors: []
    }
  },

  componentDidMount: function(){
    this.listenerToken = ModalStore.addListener(this._onChange);
    this.sessionStoreListenerToken = SessionStore.addListener(this._onSessionChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
    this.sessionStoreListenerToken.remove();
  },

  _onChange: function(){
    this.setState({
      showModal: ModalStore.checkModalStatus("signup")
    });
  },

  _onSessionChange: function(){
    this.setState({
      errors: SessionStore.errors()
    });
  },

  closeModal: function(){
    this.setState(this.getInitialState());
    SessionActions.closeSignUpModal();
  },

  _handleUsernameChange: function(e){
    console.log("Here")
    this.setState({username: e.target.value});
  },

  _handleEmailChange: function(e){
    this.setState({email: e.target.value});
  },

  _handlePasswordChange: function(e){
    this.setState({password: e.target.value});
  },

  signUp: function(e){
    e.preventDefault();

    SessionActions.signup({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
  },

  render: function () {
    if (this.state.errors.length > 0){
      var errorMsgs = this.state.errors;
      var errCnt = 0;
      var errors = errorMsgs.map(function(errorMsg){
        errCnt ++;
        return (
          <li key = {errCnt}>
            {errorMsg}
          </li>
        );
      });
    }

    return (
      <Modal
        bsSize="small"
        show={this.state.showModal}
        onHide={this.closeModal}>

        <Modal.Header closeButton>
          <Modal.Title>
            Create Account
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="input_username">Username</label>
              <input
                type="text"
                className="form-control"
                id="input_username"
                value={this.state.username}
                onChange={this._handleUsernameChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="input_email">Email</label>
              <input
                type="email"
                className="form-control"
                id="input_email"
                value={this.state.email}
                onChange={this._handleEmailChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="input_password">Password</label>
              <input
                type="password"
                className="form-control"
                id="input_password"
                value={this.state.password}
                onChange={this._handlePasswordChange}/>
            </div>
            <Button
              type="submit"
              bsStyle="primary"
              onClick={this.signUp}>
              Submit
            </Button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <ul>
            {errors}
          </ul>
        </Modal.Footer>
      </Modal>
    );
  }
});

// function FieldGroup({ id, label, help, props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// };

// <FieldGroup
//   id="formControlsText"
//   type="text"
//   label="Username"
//   placeholder="Enter text"
//   value={this.state.username}
//   onChange={this._handleUsernameChange}
//   />
// <FieldGroup
//   id="formControlsEmail"
//   type="email"
//   label="Email address"
//   placeholder="Enter email"
//   value={this.state.email}
//   onChange={this._handleEmailChange}
//   />
// <FieldGroup
//   id="formControlsPassword"
//   label="Password"
//   type="password"
//   value={this.state.password}
//   onChange={this._handlePasswordChange}
//   />
