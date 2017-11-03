export function addUser(data, history) {
  console.log(history)
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
      if (user.error) {
        console.log("Error!")
      } else {
        console.log("Added User!")
      dispatch({type: "ADD_USER", payload: user}, history)
    }})
    history.history.push('/intro')
  }
}

export function findUser(data, history) {
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
      if (user.error) {
        console.log("Error!")
      } else {
        console.log("Found User!")
      dispatch({type: "FIND_USER", payload: user})
    }}).then((login) => history.history.push('/profile'))
    // console.log(history)
  }
}


export function fetchUser() {
  const jwtToken = localStorage.getItem("token")
  return function(dispatch) {
    fetch('http://localhost:3000/api/v1/getUser',{
    headers:{
      "Authorization":`Bearer ${jwtToken}`,
      "Accept":"application/json"
    }
  })
  .then((res) => res.json())
  .then((res) => { dispatch({type: "SET_USER", payload: res})
  })
}
}


export function saveUserQuestions(data, history) {
  console.log("history in users js", history)
  // debugger
  return function(dispatch) {
    // console.log("I got to save user questions!")
    fetch('http://localhost:3000/api/v1/checkin', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then( res => { dispatch({type: "USER_CHECKEDIN", payload: res})
  })
    history.push('/done')
  }
}

// export function deleteUser(user) {
//   return {
//     type: "DELETE_USER",
//     payload: {user}
//   }
// }


// , localStorage.setItem('jwt', user.jwt)
