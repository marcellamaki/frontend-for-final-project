import React from 'react';
import { addReminder } from '../actions/reminders'
import { connect } from 'react-redux'

class CreateReminderForm extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReminder()
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>When my answer indicates that I'm not doing well and need a little help, please use the following reminder: </label>
            <input type="text" name="confirm-password" placeholder="Reminder" value={this.props.reminder} onChange={this.props.updateReminder}/> <br></br><br></br>
          <label>Please include the time of day you would like to receive this reminder in 24:00 time. For example, 7:15 P.M. would be 19:15.  </label>
            <input type="text" name="email" placeholder="HH:MM" value={this.props.reminderTime} onChange={this.props.updateReminderTime}/><br></br><br></br>
            <br></br>
            <input type="submit" name="submit" value="Add Reminder"/>
        </form><br></br><br></br>
        <h3>My Remind</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      reminders: state.reminders
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addReminder: (reminder) => {
      dispatch(addReminder(reminder))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReminderForm)
