
import React from 'react'
import QuestionDropdown from './QuestionDropdown'

const AddReminderForm = (props) => {
    console.log(props)
    return (
      <div>
        <form onSubmit={props.handleSubmit}>
              <div onChange={props.handleReminderChange}>
              <label>A reminder is texted to you when your response to your daily check-in is "false". For example, if you're not sleeping well, you might want a reminder at 2:00 PM to stop drinking coffee or a text at 10:00 PM to turn off your phone and computer and start a quiet bedroom routine.</label><br></br><br></br>
                <input type="text" className="input" name="reminder" placeholder="Reminder" value={props.reminderText}/> <br></br><br></br>
              </div>
              <div onChange={props.handleReminderTimeChange}>
              <label>Please include the time of day you would like to receive this reminder in 24:00 time. For example, 7:15 P.M. would be 19:15.  </label>
                <input type="text" name="time" className="input" placeholder="HH:MM" value={props.reminderTime}/><br></br><br></br>
              </div>
                <button className="button" type="submit">Add</button>
            </form>
        </div>
      )
  }

export default AddReminderForm

//
// <div className="radio">
//   <label>When I'm doing well, my answer to this check-in is:</label>
//     <input type="radio" value={true} onChange={props.checkValue}/>Yes
//     <input type="radio" value={false} onChange={props.checkValue}/>No<br></br>
//   </div>
