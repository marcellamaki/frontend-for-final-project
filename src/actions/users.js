export function addUser(data) {
  return function(dispatch){
    fetch(`http://localhost3000/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch({type: "ADD_USER", payload: json.data})
    })
  }
}

export function deleteUser(user) {
  return {
    type: "DELETE_USER",
    payload: {user}
  }
}
