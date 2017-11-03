import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';
import AddReminderForm from '../components/AddReminderForm';
import { connect } from 'react-redux';
import QuestionDropdown from '../components/QuestionDropdown';
import { addQuestion } from '../actions/questions';
import { addReminder} from '../actions/reminders';
import Select from 'react-select';


class QuestionReminderBundle extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      checkInText: '',
      reminderText: '',
      reminderTime: '',
      selectedCheckIn: '',
      answer: true,
      question: ''
    }
  }


  handleChange = (event) => {
    this.setState({
      checkInText: event.target.value
    })
  }

  handleDropdownChange = (event) => {
    console.log("changing the dropdown")
    this.setState({
      selectedCheckIn: event.target.value
    })
  }

  updateReminder = (event) => {
    console.log("changing reminder")
    const reminder = event.target.value
    this.setState({
      reminderText: reminder
    })
  }

  updateReminderTime = (event) => {
    console.log("changing reminderTime")
    const reminderTime = event.target.value
    console.log(reminderTime)
    this.setState({
      reminderTime: reminderTime
    })
  }

  // managing submission of child components

  handleFormSubmit = (event) => {
    console.log("Starting to submit", this.props.history)
    event.preventDefault()
    const data = {
      text: this.state.checkInText,
      user_id: this.props.currentUser.id,
      question_id: this.props.mostRecentQuestionId.id,
      active: true,
      message: this.state.reminderText,
      time: this.state.reminderTime
    }
    this.props.addReminder(data, this.props.history)
    this.setState({
      reminderTime: '',
      reminderText: '',
    })

  }


  handleCheckInSubmit = (event) => {
    event.preventDefault()
    const data = {
      text: this.state.checkInText,
      user_id: this.props.currentUser.id
    }
    // debugger
    this.props.addQuestion(data)

    this.setState({
      question: this.state.checkInText
    })
  }



  render() {
    console.log("props from question bundler", this.props)
    if (this.props.currentUser === undefined) {
      return
      <div>Loading...</div>
    } else {

        // debugger
        if (!!this.state.question) {
         return(
           <div>
             <br></br>
             <h2>Check-In: {this.state.question}</h2>
              <h3>Now, add a reminder to go along with it</h3>
             <AddReminderForm reminderText={this.state.reminderText} reminderTime={this.state.reminderTime} handleReminderChange={this.updateReminder} handleReminderTimeChange={this.updateReminderTime} handleSubmit={this.handleFormSubmit} />
           </div>
         )
       } else {
         console.log(this.props.questions)
         return (
            <AddQuestionForm text={this.state.checkInText} handleChange={this.handleChange} handleSubmit={this.handleCheckInSubmit}/>
         )
     }
    }
}
}


function mapStatetoProps(state) {
  console.log(state.question.mostRecent)
    return {
      currentUser: state.users.currentUser,
      questions: state.users.userQuestions,
      reminders: state.users.userReminders,
      mostRecentQuestionId: state.question.mostRecent
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (question) => {
      dispatch(addQuestion(question))
    },
    addReminder: (reminder, history) => {
        dispatch(addReminder(reminder, history))
    }
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(QuestionReminderBundle);
