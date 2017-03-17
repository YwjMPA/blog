const React = require('react');

class ModalHeader extends React.Component {
  render() {
    return (
      <div className="modal-header">
        <span className="close">&times;</span>
        <h3>Ywj{'\''}s Blog</h3>
      </div>
    );
  }
}

class ModalBody extends React.Component {
  render() {
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
          <input type="submit" value="Log in" id="logSubmit"/>
        </form>
      </div>
    );
  }
}

class ModalFooter extends React.Component {
  render() {
    return (
      <div className="modal-footer">
        Don{'\''}t have an account? {' '}
        <a href=''>Sign up</a>
      </div>
    );
  }
}

class ModalContent extends React.Component {
  render(){
    return (
      <div className="modal-content">
        <ModalHeader />
        <hr />
        <ModalBody />
        <ModalFooter />
      </div>
    );
  }
}

class MyModal extends React.Component {
  render(){
    return (
      <div id='modal' className='modal'>
        <ModalContent />
      </div>
    );
  }
}

module.exports = {
  modal:MyModal
}
