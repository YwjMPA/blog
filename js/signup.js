import React from 'react';

const SignUpUsername = (props) => {
  const handleSignUpUsernameChange = (e) => {
    props.handleSignUpUsernameChange(e.target.value);
  };
  return (
    <div className="sign-up-form-group">
      <input type="text" placeholder="Username" value={props.username}
          onChange={handleSignUpUsernameChange}/>
    </div>
  );
}

const SignUpPassword = (props) => {
  const handleSignUpPasswordChange = (e) => {
    props.handleSignUpPasswordChange(e.target.value);
  };
  return (
    <div className="sign-up-form-group">
      <input type="password" placeholder="Password" value={props.password}
          onChange={handleSignUpPasswordChange}/>
    </div>
  );
}

const SignUpPasswordTwo = (props) => {
  const handleSignUpPasswordTwoChange = (e) => {
    props.handleSignUpPasswordTwoChange(e.target.value);
  };
  return (
    <div className="sign-up-form-group">
      <input type="password" placeholder="Comfirm password" value={props.password}
          onChange={handleSignUpPasswordTwoChange}/>
    </div>
  );
}

const SignUpName = (props) => {
  const handleSignUpFNameChange = (e) => {
    props.handleSignUpFNameChange(e.target.value);
  };
  const handleSignUpLNameChange = (e) => {
    props.handleSignUpLNameChange(e.target.value);
  };
  return (
    <div className="sign-up-form-group">
      <input type="text" placeholder="First name" value={props.firstname}
          onChange={handleSignUpFNameChange}/>
      <input type="text" placeholder="Last name" value={props.lastname}
          onChange={handleSignUpLNameChange}/>
    </div>
  );
}
const SignUpEmail = (props) => {
  const handleSignUpEmailChange = (e) => {
    props.handleSignUpEmailChange(e.target.value);
  };
  return (
    <div className="sign-up-form-group">
      <input type="email" placeholder="Email" value={props.email}
          onChange={handleSignUpEmailChange}/>
    </div>
  );
}

const SignUp = (props) => {
  const handleSignUpSubmit = (e) => {
    props.handleSignUpSubmit(e);
  }
  return (
    <section className="sign-up-section">
      <h1>Sign Up</h1>
      <form className="sign-up-form">
        <SignUpUsername username={props.signUpData.username}
            handleSignUpUsernameChange={props.handleSignUpUsernameChange}/>
        <SignUpPassword password={props.signUpData.password}
            handleSignUpPasswordChange={props.handleSignUpPasswordChange}/>
        <SignUpPasswordTwo password={props.signUpData.passwordTwo}
            handleSignUpPasswordTwoChange={props.handleSignUpPasswordTwoChange}/>
        <SignUpName  firstname={props.signUpData.firstname}
            lastname={props.signUpData.lastname}
            handleSignUpLNameChange={props.handleSignUpLNameChange}
            handleSignUpFNameChange={props.handleSignUpFNameChange}/>
        <SignUpEmail email={props.signUpData.email}
            handleSignUpEmailChange={props.handleSignUpEmailChange}/>
        <input type="submit" value='confirm' id="signUpSubmit" onClick={handleSignUpSubmit}/>
      </form>
    </section>
  );
}

module.exports = {
  signUp: SignUp
}
