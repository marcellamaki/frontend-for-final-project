export function addReminder(data) {
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/reminders', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then((reminder) => {
      dispatch({type: "ADD_REMINDER", payload: reminder}, console.log(reminder))
    })
  }
}

export function deleteUser(user) {
  return {
    type: "DELETE_USER",
    payload: {user}
  }
}
