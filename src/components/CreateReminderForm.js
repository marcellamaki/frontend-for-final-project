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
  updateQuestion = (event) => {
    let question = event.target.value
    // console.log(username)
    this.setState({ question: question})
  }

  updateAnswer = (event) => {
    let answer = (event.target.value === "true")
    this.setState({ answer: answer})
    console.log(answer)
  }

  updateReminder = (event) => {
    let reminder = event.target.value
    console.log(reminder)
    this.setState({ reminder: reminder})
  }

  updateReminderTime = (event) => {
    let reminder_time = event.target.value
    this.setState({ reminder_time: reminder_time})
  }


  render() {
    // console.log(this.props)
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>When my answer indicates that I'm not doing well and need a little help, please use the following reminder: </label>
            <input type="text" name="confirm-password" placeholder="Reminder" value={this.state.reminder} onChange={this.updateReminder}/> <br></br><br></br>
          <label>Please include the time of day you would like to receive this reminder in 24:00 time. For example, 7:15 P.M. would be 19:15.  </label>
            <input type="text" name="email" placeholder="HH:MM" value={this.state.reminderTime} onChange={this.updateReminderTime}/><br></br><br></br>
            <br></br>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      reminders: state.reminders
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addReminder: (reminder) => {
      dispatch(addReminder(reminder))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReminderForm)
