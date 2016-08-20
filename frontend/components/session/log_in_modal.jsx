const React = require("react");
const Modal = require("react-bootstrap").Modal;
const Input = require("react-bootstrap").input;
const Button = require("react-bootstrap").Button;
const FormGroup = require("react-bootstrap").FormGroup;
const FormControl = require("react-bootstrap").FormControl;
const ControlLabel = require("react-bootstrap").ControlLabel;
const SessionActions = require('../../actions/sessionActions');
const ModalStore = require('../../stores/ModalStore');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      showModal: ModalStore.checkModalStatus("login"),
      username: '',
      password: ''
    }
  },

  componentDidMount: function(){
    this.listenerToken = ModalStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  _onChange: function(){
    this.setState({
      showModal: ModalStore.checkModalStatus("login")
    })
  },

  _handleUsernameChange: function(e){
    this.setState({username: e.target.value});
  },

  _handlePasswordChange: function(e){
    this.setState({password: e.target.value});
  },

  closeModal: function(){
    this.setState(this.getInitialState());
    SessionActions.closeLogInModal();
  },

  logIn: function(e){
    e.preventDefault();
    SessionActions.login({
      username: this.state.username,
      password: this.state.password
    })
  },

  render: function () {
    return (
      <Modal bsSize="small" show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="input_username">Username</label>
                <input type="text"
                className="form-control"
                id="input_username"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this._handleUsernameChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="input_password">Password</label>
                <input type="password"
                className="form-control"
                id="input_password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this._handlePasswordChange}/>
              </div>
              <Button
                type="submit"
                bsStyle="primary"
                onClick={this.logIn}>
                Submit
              </Button>
              </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    );
  }
});
