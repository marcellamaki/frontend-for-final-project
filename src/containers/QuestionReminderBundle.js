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
    console.log(reminderTime)
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
      message: this.state.reminderText,
      time: this.state.reminderTime
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
    // this.fetchQuestionList()
    console.log(this.state.allQuestions)
    if (this.props.questions === undefined || this.props.questions.length === 0) {
      return <div>Loading...</div>
    } else {
      console.log(this.props.questions)
      const currentUserQuestions = this.props.questions.map((question, index) => <QuestionDropdown question={question} key={index}/>)
     return(
       <div>
         <AddQuestionForm text={this.state.checkInText} handleChange={this.handleChange} handleSubmit={this.handleCheckInSubmit}/>
         <form onChange={this.handleDropdownChange}>
           <select>
             <option value="">My Check-Ins</option>
             {currentUserQuestions}
           </select>
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
