import React from 'react';
import QuestionDropdown from './QuestionDropdown'

class AddReminderForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      message: '',
      active: true,
      question_id: 0,
    }

  }


  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  checkValue = (event) => {
    const active = (event.target.value === 'true')
    this.setState({
      active: active
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      message: this.state.message,
      active: this.state.active,
      qusetion_id: this.state.question_id
    }

    fetch('http://localhost:3000/api/v1/reminders', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
        'Content-Type':'application/json'
      }
    })
    this.setState({
      question: '',
      active: true,
      question_id: 0,
    })
  }

  updateDeckId = (event) => {
    this.setState({
      question_id: parseInt(event.target.value)
    })
  }

  render() {
    console.log(this.props.currentQuestions)
    if (this.props.currentQuestions.length === 0) {
      return <div></div>
    } else {
      const currentQuestions = this.props.currentQuestions.map((question, index) =>
        <QuestionDropdown question={question} key={index}/>)
      return (
        <div>
          <form>
                <label>Add Reminder to one of your Check-Ins</label><br></br><br></br>
                <select className="ui search dropdown" onChange={this.updateQuestionId}>
                  <option value="">Current Check-Ins</option>
                  {currentQuestions}
                </select><br></br><br></br>
                <label>When I'm doing well, my answer to this check-in is:</label>
                  <input type="radio" name="true" value="true" onChange={this.updateAnswer}/>Yes
                  <input type="radio" name="false" value="false" onChange={this.updateAnswer}/>No<br></br>
                  <br></br><br></br>
                <label>When my answer indicates that I'm not doing well and need a little help, please use the following reminder: </label><br></br><br></br>
                  <input type="text" name="reminder" placeholder="Reminder" value={this.props.reminder} onChange={this.props.updateReminder}/> <br></br><br></br>
                <label>Please include the time of day you would like to receive this reminder in 24:00 time. For example, 7:15 P.M. would be 19:15.  </label>
                  <input type="text" name="time" placeholder="HH:MM" value={this.props.reminderTime} onChange={this.props.updateReminderTime}/><br></br><br></br>
              </form><br></br><br></br>
            <button className="ui button" type="submit" onClick={this.handleSubmit}>Save Reminder</button>
          </div>
      )
    }
  }
}

export default AddReminderForm;
