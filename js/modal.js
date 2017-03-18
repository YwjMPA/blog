const React = require('react');

const ModalHeader = (props) => {
  return (
    <div className="modal-header">
      <span className="close">&times;</span>
      <h3>Ywj{'\''}s Blog</h3>
    </div>
  );
};

const ModalBody = (props) => {
  return (
    <div className="modal-body">
      <form action="#">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Username" id="username"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" id="password"/>
        </div>
        <input type="submit" value="Log in"  id="logSubmit"/>
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
      <a onClick={handleSignUp}>Sign up</a>
    </div>
  );
};

const ModalContent = (props) => {
  return (
    <div className="modal-content">
      <ModalHeader />
      <hr />
      <ModalBody />
      <ModalFooter handleSignUp={props.handleSignUp}/>
    </div>
  );
};

const MyModal = (props) => {
  return (
    <div id='modal' className='modal'>
      <ModalContent handleSignUp={props.handleSignUp}/>
    </div>
  );
};

module.exports = {
  modal:MyModal
}
