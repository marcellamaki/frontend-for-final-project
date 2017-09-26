
import React from 'react';
import { addUser } from '../actions/users'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CreateUserForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone_number: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log( "Props", this.props, "state", this.state)
    this.props.addUser(this.state)
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
        <h3>This application works by getting in touch with you to check in.</h3>
        <h4>Get started by creating an account and adding a little bit of information about the best way to contact you.</h4>
        <form className="form" onSubmit={this.handleSubmit}>
          <p>Account Details</p>
          <label>Username: </label>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.updateUsername}/>
          <label>Password: </label>
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
          <label>Confirm Password: </label>
            <input type="text" name="confirm-password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.updateConfirmPassword}/>
          <p>Contact Information</p>
          <p>Please be sure you feel comfortable receiving updates at the phone number and email address you provide. Also, please be sure to input a phone number that can receive SMS messages.</p>
          <label>Email Address: </label>
            <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.updateEmail}/>
          <label>Phone Number: </label>
            <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.updatePhone}/>
            <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );

  }
}

function mapStatetoProps(state) {

    return {
      users: state.users
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }

}

export default connect(mapStatetoProps, mapDispatchToProps)(CreateUserForm)
