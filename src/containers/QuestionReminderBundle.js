import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';
import AddReminderForm from '../components/AddReminderForm';
import { connect } from 'react-redux';
import QuestionDropdown from '../components/QuestionDropdown'

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

  handleCheckInSubmit = (event) => {
  	event.preventDefault()
  	const data = {
  		text: this.state.checkInText,
      user_id: this.props.currentUser.id
  	}

  	fetch('http://localhost:3000/api/v1/questions', {
  		method: 'POST',
  		body: JSON.stringify({data}),
  		headers: {
  			"Content-Type": "application/json"
  		}
  	}).then(res => res.json())
  	.then(res => this.setState({
      allQuestions: res
    }))
    // console.log(this.state.allQuestions)
  }

  handleChange = (event) => {
    this.setState({
      checkInText: event.target.value
    })
  }

  handleDropdownChange = (event) => {
    this.setState({
      selectedCheckIn: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const data = {
      question_id: this.state.selectedCheckIn,
      answer: this.state.answer
    }

    fetch('http://localhost:3000/api/v1/reminders', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
  			"Content-Type": "application/json"
  		}
    }).then(res => res.json())
      .then(res => console.log("this worked and I got back:", res))
  }

  checkValue = (event) => {
    const answer = (event.target.value === 'true')
    console.log(answer)
    this.setState({
      answer:answer
    })

  }


  render() {
    const myQuestions = this.state.allQuestions
    // console.log(myQuestions)
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
         <AddReminderForm currentQuestions={myQuestions} reminder={this.state.reminderText} onSubmit={this.handleFormSubmit} checkValue={this.props.checkValue}/>
       </div>
     )
   }
}
}

function mapStatetoProps(state) {
  // console.log("state in question container", state)
    return {
      currentUser: state.users.currentUser
    }
}

export default connect(mapStatetoProps)(QuestionReminderBundle);
