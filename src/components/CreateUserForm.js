import React from 'react';

class SignUpForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone: ''
    }
  }

  handleSubmit = (event) => {
    //this updates the store
    event.preventDefault()
    this.props.addUser(this.state.user)
    this.setState({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone: ''
    })
  }

  updateUsername = (event) => {
    let username = event.target.value
    console.log(username)
    this.setState({ username: username})
  }

  updatePassword = (event) => {
    let password = event.target.value
    console.log(password)
    this.setState({ password: password})
  }

  updateConfirmPassword = (event) => {
    let confirmPassword = event.target.value
    console.log(confirmPassword)
    this.setState({ confirmPassword: confirmPassword})
  }

  updateEmail = (event) => {
    let email = event.target.value
    console.log(email)
    this.setState({ email: email})
  }

  updatePhone = (event) => {
    let phone = event.target.value
    console.log(phone)
    this.setState({ phone: phone})
  }


  render() {
    console.log(this.state)
    return(
      <div>
        <h3>This application works by getting in touch with you to check in.</h3>
        <h4>Get started by creating an account and adding a little bit of information about the best way to contact you.</h4>
        <form className="form">
          <p>Account Details</p>
          <label>Username: </label>
            <input type="text" name="username" placeholder="Username" onChange={this.updateUsername}/>
          <label>Password: </label>
            <input type="text" name="password" placeholder="Password"/>
          <label>Confirm Password: </label>
            <input type="text" name="confirm-password" placeholder="Confirm Password"/>
          <p>Contact Information</p>
          <p>Please be sure you feel comfortable receiving updates at the phone number and email address you provide. Also, please be sure to input a phone number that can receive SMS messages.</p>
          <label>Email Address: </label>
            <input type="text" name="email" placeholder="Email Address"/>
          <label>Phone Number: </label>
            <input type="text" name="phone" placeholder="Phone Number"/>
            <br></br>
          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}


export default SignUpForm
