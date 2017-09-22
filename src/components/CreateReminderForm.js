import React from 'react';
import { addReminder } from '../actions/reminders'
import { connect } from 'react-redux'

class CreateReminderForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: true,
      reminder: '',
      active: true,
      reminder_time: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //this updates the store
    this.props.addReminder(this.state)
    this.setState({
      question: '',
      answer: '',
      reminder: '',
      active: '',
      reminder_time: ''
    })
  }

  // these methods update local state of the controlled form
  updateUsername = (event) => {
    let question = event.target.value
    // console.log(username)
    this.setState({ question: question})
  }

  updatePassword = (event) => {
    let answer = (event.target.value === "true")
    // console.log(password)
    this.setState({ answer: answer})
  }

  updateReminder = (event) => {
    let reminder = event.target.value
    // console.log(email)
    this.setState({ reminder: reminder})
  }

  updateReminderTime = (event) => {
    let reminder_time = event.target.value
    // console.log(phone)
    this.setState({ reminder_time: reminder_time})
  }


  render() {
    // console.log(this.props)
    return(
      <div>
        <h3>Add a custom question, answer, and reminder to your list.</h3>
        <form className="form" onSubmit={this.handleSubmit}
          <label>Question: </label>
            <input type="text" name="question" placeholder="Question" value={this.state.question} onChange={this.updateQuestion}/>
            <label class="switch">When I'm doing well, my answer to this question is:</label>
              <input type="checkbox"/>
              <span class="slider"></span>
          <label>Confirm Password: </label>
            <input type="text" name="confirm-password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.updateConfirmPassword}/>
          <p>Contact Information</p>
          <p>Please be sure you feel comfortable receiving updates at the phone number and email address you provide. Also, please be sure to input a phone number that can receive SMS messages.</p>
          <label>Email Address: </label>
            <input type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.updateEmail}/>
          <label>Phone Number: </label>
            <input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.updatePhone}/>
            <br></br>
          <input type="submit" name="submit"/>
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

export default connect(mapStatetoProps, mapDispatchToProps)(CreateReminderForm)
