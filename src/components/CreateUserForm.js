
import React from 'react';
import Auth from '../adapters/auth'
import { addUser } from '../actions/users'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class CreateUserForm extends React.Component {
  state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone_number: ''
    }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log( "Props", this.props)
    this.props.addUser(this.state, this.props.history)
    this.setState({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone_number: ''
    })
  }

  // these methods update local state of the controlled form
  updateUsername = (event) => {
    let username = event.target.value
    // console.log(username)
    this.setState({ username: username})
  }

  updatePassword = (event) => {
    let password = event.target.value
    // console.log(password)
    this.setState({ password: password})
  }

  updateConfirmPassword = (event) => {
    let confirmPassword = event.target.value
    // console.log(confirmPassword)
    this.setState({ confirmPassword: confirmPassword})
  }

  updateEmail = (event) => {
    let email = event.target.value
    // console.log(email)
    this.setState({ email: email})
  }

  updatePhone = (event) => {
    let phone = event.target.value
    // console.log(phone)
    this.setState({ phone_number: phone})
  }


  render() {
    // console.log(this.props)
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>This application works by getting in touch with you to check in.</h2>
          <h3>Get started by creating an account and adding a little bit of information about the best way to contact you.</h3>
          <h4>Account Details</h4>
          <label>Username: </label>
            <input type="text" name="username" required="required" placeholder="Username" value={this.state.username} onChange={this.updateUsername}/><br></br>
          <label>Password: </label>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/><br></br>
          <label>Confirm Password: </label>
            <input type="password" name="confirm-password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.updateConfirmPassword}/>
            <br></br>
          <h4>Contact Information</h4>
          Please be sure you feel comfortable receiving updates at the phone number and email address you provide.
          <br></br>
          Also, please be sure to input a phone number that can receive SMS messages.
          <br></br>
          <br></br>
          <label>Email Address: </label>
            <input type="email" name="email" placeholder="email@email.com" value={this.state.email} onChange={this.updateEmail}/>
            <br></br>
          <label>Phone Number: </label>
            <input type="text" name="phone" placeholder="xxx-xxx-xxxx" value={this.state.phone} pattern="^\d{3}-\d{3}-\d{4}$" onChange={this.updatePhone}/>
            <br></br>
            <br></br>
          <input type="submit"></input>

        </form>
      </div>
    );

  }
}


function mapDispatchToProps(dispatch) {
  return {
    addUser: (user, history) => {
      dispatch(addUser(user, history))
    }
  }

}

export default connect(null, mapDispatchToProps)(CreateUserForm)
