const React = require('react');

const ModalHeader = (props) => {
  const handleModalCloseClick = () => {
    props.handleModalCloseClick();
  }
  return (
    <div className="modal-header">
      <span className="close" onClick={handleModalCloseClick}>&times;</span>
      <h3>Ywj{'\''}s Blog</h3>
    </div>
  );
};

const ModalBody = (props) => {
  const handleLogUsernameChange = (e) => {
    props.handleLogUsernameChange(e.target.value);
  };
  const handleLogPasswordChange = (e) => {
    props.handleLogPasswordChange(e.target.value);
  };
  const handleLogInSubmit = () => {
    props.handleLogInSubmit();
  };
  return (
    <div className="modal-body">
      <form action="#">
        <div className="modal-form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Username" id="username"
              onChange={handleLogUsernameChange} value={props.logInData.username}/>
        </div>
        <div className="modal-form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" id="password"
              onChange={handleLogPasswordChange} value={props.logInData.password}/>
        </div>
        <input type="submit" value="Log in"  id="logSubmit" onClick={handleLogInSubmit}/>
      </form>
    </div>
  );
};

const ModalFooter = (props) => {
  const handleSignUp = () => {
    props.handleSignUp();
  };
  return (
    <div className="modal-footer">
      Don{'\''}t have an account? {' '}
      <a id="signUp" onClick={handleSignUp}>Sign up</a>
    </div>
  );
};

const ModalContent = (props) => {
  return (
    <div className="modal-content">
      <ModalHeader handleModalCloseClick={props.handleModalCloseClick}/>
      <hr />
      <ModalBody handleLogUsernameChange={props.handleLogUsernameChange}
          handleLogPasswordChange={props.handleLogPasswordChange}
          logInData={props.logInData}
          handleLogInSubmit={props.handleLogInSubmit}/>
      <ModalFooter handleSignUp={props.handleSignUp}/>
    </div>
  );
};

class MyModal extends React.Component {
  render() {
    return (
      <div id='modal' className={!this.props.modalToggle? 'modal':'modal modal-open'}
        ref={(modal) => { this.modal = modal; }} >
        <ModalContent handleSignUp={this.props.handleSignUp}
            handleModalCloseClick={this.props.handleModalCloseClick}
            handleLogUsernameChange={this.props.handleLogUsernameChange}
            handleLogPasswordChange={this.props.handleLogPasswordChange}
            logInData={this.props.logInData}
            handleLogInSubmit={this.props.handleLogInSubmit}/>
      </div>
    );
  }
  componentDidMount(){
    window.onclick = (e) => {
      if (e.target == this.modal) {
        this.props.handleModalCloseClick();
      }
    };
  }
  componentWillUnmount(){
    window.onclick = null;
  }

};

module.exports = {
  modal:MyModal
}
