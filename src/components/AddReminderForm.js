
import React from 'react'
import QuestionDropdown from './QuestionDropdown'

const AddReminderForm = (props) => {
    console.log(props)
    return (
      <div>
        <form onSubmit={props.handleSubmit}>
              <div onChange={props.handleReminderChange}>
              <label>When my answer indicates that I'm not doing well and need a little help, please use the following reminder: </label><br></br><br></br>
                <input type="text" name="reminder" placeholder="Reminder" value={props.reminderText}/> <br></br><br></br>
              </div>
              <div onChange={props.handleReminderTimeChange}>
              <label>Please include the time of day you would like to receive this reminder in 24:00 time. For example, 7:15 P.M. would be 19:15.  </label>
                <input type="text" name="time" placeholder="HH:MM" value={props.reminderTime}/><br></br><br></br>
              </div>
                <button className="ui button" type="submit">Add</button>
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
