import React from 'react';
import { addQuestion} from '../actions/questions'
import { connect } from 'react-redux'
import CreateReminderForm from './CreateReminderForm'

class CreateQuestionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: true,
      showReminderForm: false
    }
  }

  onButtonClick = (event) => {
    event.preventDefault()
    this.setState({
      showComponent: true
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //this updates the store
    this.props.addQuestion(this.state)
    this.setState({
      text: '',
      answer: '',
      reminder: '',
      active: '',
      reminder_time: ''
    })
  }

  // these methods update local state of the controlled form
  updateText = (event) => {
    let text = event.target.value
    // console.log(username)
    this.setState({ text: text})
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
        <h3>Add a custom check-in, response, and reminder to your list.</h3>
        <form className="form">
            <label>Check In: </label>
              <input type="text" name="question" placeholder="Check in" value={this.state.question} onChange={this.updateText}/><br></br><br></br>
            <label>When I'm doing well, my answer to this check-in is:</label>
              <input type="radio" name="gender" value="true" onChange={this.updateAnswer}/>Yes
              <input type="radio" name="gender" value="false" onChange={this.updateAnswer}/>No<br></br>
              <br></br><br></br>
            <input type="button" value="Save Check-In" onClick={this.onButtonClick}/>
          </form><br></br><br></br>
          {this.state.showComponent ? <CreateReminderForm updateReminder={this.updateReminder} updateReminderTime={this.updateReminderTime}/> : null}
      </div>
    );
  }
}

  function mapStateToProps(state) {
      return {
        question: state.questions
      }
  }

  function mapDispatchToProps(dispatch) {
    return {
      addQuestion: (question) => {
        dispatch(addQuestion(question))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm)
