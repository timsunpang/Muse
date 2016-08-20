const React = require("react");
const Modal = require("react-bootstrap").Modal;
const Input = require("react-bootstrap").Input;
const Button = require("react-bootstrap").Button;
const FormGroup = require("react-bootstrap").FormGroup;
const FormControl = require("react-bootstrap").FormControl;
const ControlLabel = require("react-bootstrap").ControlLabel;
const SessionActions = require('../../actions/sessionActions');
const ModalStore = require('../../stores/ModalStore');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      showModal: ModalStore.checkModalStatus("signup")
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
      showModal: ModalStore.checkModalStatus("signup")
    })
  },

  closeModal: function(){
    this.setState(this.getInitialState());
    SessionActions.closeSignUpModal();
  },

  render: function () {
    function FieldGroup({ id, label, help, props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    };

    return (
      <Modal bsSize="small" show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <form>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Username"
                placeholder="Enter text"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
              />
              <FieldGroup
                id="formControlsPassword"
                label="Password"
                type="password"
              />
              <Button type="submit" bsStyle="primary">
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
