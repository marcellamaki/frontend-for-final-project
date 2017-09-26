export function addUser(data) {
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then((user) => {
      dispatch({type: "ADD_USER", payload: user}, console.log(user))
    })
  }
}

export function findUser(data, history) {
  console.log(history)
  return function(dispatch) {
    const url = `http://localhost:3000/api/v1/login`
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then((user) => {
      dispatch({type: "FIND_USER", payload: user}, console.log(user))
    })
    console.log(history)
    history.history.push('/questions/new')
  }

}

export function deleteUser(user) {
  return {
    type: "DELETE_USER",
    payload: {user}
  }
}


// , localStorage.setItem('jwt', user.jwt)
