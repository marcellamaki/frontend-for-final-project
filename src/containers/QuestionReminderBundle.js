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
      allQuestions: [],
      reminderText: '',
      reminderTime: '',
      selectedCheckIn: '',
      answer: true
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
    this.setState({
      reminderTime: reminderTime
    })
  }

  // managing submission of child components

  handleFormSubmit = (event) => {
    console.log("Starting to submit")
    event.preventDefault()
    const data = {
      question_id: this.state.selectedCheckIn,
      active: true,
      message: this.state.reminderText
    }
    this.props.addReminder(data)
  }


  handleCheckInSubmit = (event) => {
    event.preventDefault()
    const data = {
      text: this.state.checkInText,
      user_id: this.props.currentUser.id
    }
    this.props.addQuestion(data)
  }


  render() {
    console.log(this.props)
    if (!this.props.questions) {
      return <div>Loading...</div>
    } else {
     return(
       <div>
         <form>
           <QuestionDropdown currentUser={this.props.currentUser} questions={this.props.questions} reminders={this.props.reminders}/>
         </form>
         <AddReminderForm reminderText={this.state.reminderText} reminderTime={this.state.reminderTime} handleReminderChange={this.updateReminder} handleReminderTimeChange={this.updateReminderTime} handleSubmit={this.handleFormSubmit} />
       </div>
     )
   }
}
}


function mapStatetoProps(state) {
  // console.log(state)
    return {
      currentUser: state.users.currentUser,
      questions: state.users.userQuestions,
      reminders: state.users.userReminders
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (question) => {
      dispatch(addQuestion(question))
    },
    addReminder: (reminder) => {
        dispatch(addReminder(reminder))
    }
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(QuestionReminderBundle);
