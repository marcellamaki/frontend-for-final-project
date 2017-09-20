import React from 'react';

const SignUpForm = () => {
  return(
    <div>
      <h3>This application works by getting in touch with you to check in.</h3>
      <h4>Get started by creating a username and adding a little bit of information about the best way to contact you.</h4>
      <form className="form">
        <label>Username</label>
        <input type="text" name="name" placeholder="Username"/>
      </form>
    </div>
  )
}


export default SignUpForm
