import React from 'react';

class SignUpForm extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <h3>This application works by getting in touch with you to check in.</h3>
        <h4>Get started by creating an account and adding a little bit of information about the best way to contact you.</h4>
        <form className="form">
          <p>Account Details</p>
          <label>Username: </label>
            <input type="text" name="name" placeholder="Username"/>
          <label>Password: </label>
            <input type="text" name="name" placeholder="Password"/>
          <label>Confirm Password: </label>
            <input type="text" name="name" placeholder="Confirm Password"/>
          <p>Contact Information</p>
          <p>Please be sure you feel comfortable receiving updates at the phone number and email address you provide. Also, please be sure to input a phone number that can receive SMS messages.</p>
          <label>Email Address: </label>
            <input type="text" name="name" placeholder="Email Address"/>
          <label>Phone Number: </label>
            <input type="text" name="name" placeholder="Phone Number"/>
        </form>
      </div>
    );
  }
}


export default SignUpForm
