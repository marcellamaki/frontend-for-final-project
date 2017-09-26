import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';
import AddReminderForm from '../components/AddReminderForm';
import { connect } from 'react-redux'

class QuestionReminderBundle extends React.Component {

  constructor(props) {
    super(props)

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
    console.log("current props:", this.props)
    return(
      <div>
        <AddQuestionForm text={this.state.checkInText} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <br></br>
        <AddReminderForm currentQuestions={this.state.allQuestions} />

      </div>
    )
  }
}

function mapStatetoProps(state) {
  console.log("state in question container", state)
    return {
      currentUser: state.users.currentUser
    }
}

export default connect(mapStatetoProps)(QuestionReminderBundle);
