import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';
import AddReminderForm from '../components/AddReminderForm';

class QuestionReminderBundle extends React.Component {

  constructor() {
    super()

    this.state = {
      checkInText: '',
      allQuestions: []
    }

  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/questions', {
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


  handleSubmit = (event) => {
  	event.preventDefault()
  	const data = {
  		text: this.state.checkInText
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
    console.log(this.state.allQuestions)
  }

  handleChange = (event) => {
    this.setState({
      checkInText: event.target.value
    })
  }


  render() {
    return(
      <div>
        <AddQuestionForm name={this.state.questioName} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <br></br>
        <AddReminderForm currentQuestions={this.state.allQuestions} />

      </div>
    )
  }
}

export default QuestionReminderBundle;
