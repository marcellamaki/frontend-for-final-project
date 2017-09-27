import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';
import AddReminderForm from '../components/AddReminderForm';
import { connect } from 'react-redux';
import QuestionDropdown from '../components/QuestionDropdown'
import { addQuestion } from '../actions/questions'
import { addReminder} from '../actions/reminders'

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

  componentDidMount() {
    this.fetchQuestionList()
    console.log(this.state.allQuestions)
  }

  fetchQuestionList() {
    const user_id = this.props.currentUser.id

    fetch(`http://localhost:3000/api/v1/questions/${user_id}`, {
      headers : {
        method: "GET",
        'Content-Type': 'application/json'
       }
    })
      .then(res => res.json())
      .then(res => this.setState({
        allQuestions: res
      }))
  }

  //handle controlled forms

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
    const myQuestions = this.state.allQuestions
    console.log(this.props)
    if (this.state.allQuestions.length === 0) {
      return <div>  <AddQuestionForm text={this.state.checkInText} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> </div>
    } else {
      const currentUserQuestions = this.state.allQuestions.map((question, index) => <QuestionDropdown question={question} key={index}/>)
     return(
       <div>
         <AddQuestionForm text={this.state.checkInText} handleChange={this.handleChange} handleSubmit={this.handleCheckInSubmit}/>
         <form onChange={this.handleDropdownChange}>
           <select>
             <option value="">My Check-Ins</option>
             {currentUserQuestions}
           </select>
         </form>
         <AddReminderForm currentQuestions={myQuestions} reminderText={this.state.reminderText} reminderTime={this.state.reminderTime} handleReminderChange={this.updateReminder} handleReminderTimeChange={this.updateReminderTime} handleSubmit={this.handleFormSubmit} />
       </div>
     )
   }
}
}

function mapStatetoProps(state) {
  console.log(state)
    return {
      currentUser: state.users.currentUser,
      
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
