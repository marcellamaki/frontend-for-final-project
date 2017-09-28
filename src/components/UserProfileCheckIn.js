import React from 'react'
import { connect } from 'react-redux';
import { saveUserQuestions} from '../actions/users.js'

class UserProfileCheckIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser: this.props.currentUser,
      questions: this.props.questions,
      reminders: this.props.reminders,
      answeredQuestions: {}, 
      needsReminder: []
    }
  }

  handleChange = (event) => {
    const questionID = event.target.name
    const questionResponse = event.target.value
    // console.log("question id", questionID, "question response", questionResponse)
    this.state.answeredQuestions[`${questionID}`] = `${questionResponse}`
    console.log(this.state.answeredQuestions)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log("submitting")
    const responses = this.state.answeredQuestions
    let needsReminder = Object.keys(responses).map(function(key, index) {
      if (responses[key] === 'false'){
        return parseInt(key)
      }
    }).filter(Boolean);
    console.log(needsReminder)
    this.props.saveUserQuestions(needsReminder)
    this.setState({
      answeredQuestions: {},
      needsReminder: needsReminder
    })

  }


  render(){
    // console.log(this.state)
    const quizQuestions = !!this.state.questions ? this.state.questions.map((question, index) =>
    <div key={index}>
      <label>{question.text}
        <input type="radio" name={question.id} value="true" onClick={this.handleChange}/> True
        <input type="radio" name={question.id} value="false" onClick={this.handleChange}/> False<br></br>
      </label>
    </div>
    ) : ""
    // console.log(quizQuestions)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        {quizQuestions}
        <input type="submit" value="Save My Responses"/>
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    saveUserQuestions: (data) => {
      dispatch(saveUserQuestions(data))
    }
  }
}



export default connect(null, mapDispatchToProps)(UserProfileCheckIn)
