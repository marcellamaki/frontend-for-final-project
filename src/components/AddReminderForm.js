
import React from 'react'
import QuestionDropdown from './QuestionDropdown'

const AddReminderForm = (props) => {

    return (
      <div>
        <form>
            <div className="radio">
              <label>When I'm doing well, my answer to this check-in is:</label>
                <input type="radio" value={true} onChange={props.checkValue}/>Yes
                <input type="radio" value={false} onChange={props.checkValue}/>No<br></br>
              </div>
                <br></br><br></br>
              <label>When my answer indicates that I'm not doing well and need a little help, please use the following reminder: </label><br></br><br></br>
                <input type="text" name="reminder" placeholder="Reminder" value={props.reminderText} onChange={props.updateReminder}/> <br></br><br></br>
              <label>Please include the time of day you would like to receive this reminder in 24:00 time. For example, 7:15 P.M. would be 19:15.  </label>
                <input type="text" name="time" placeholder="HH:MM" value={props.reminderTime} onChange={props.updateReminderTime}/><br></br><br></br>
            </form><br></br><br></br>
          <button className="ui button" type="submit" onClick={props.handleSubmit}>Save Reminder</button>
        </div>
      )
  }

export default AddReminderForm
