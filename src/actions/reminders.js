export function addReminder(data) {
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/reminders', {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
  			"Content-Type": "application/json"
  		}
    }).then(res => res.json())
      .then(res => {
      dispatch({type: "ADD_REMINDER", payload: res}, console.log("This worked from reminder.js and you got back:", res))
    })
  }
}
