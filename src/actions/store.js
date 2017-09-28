export function getUser(data) {
  return function(dispatch) {
    const url = `http://localhost:3000/api/v1/users`
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then((user) => { dispatch({type: "FIND_USER", payload: user})})
  }
}
