export function addQuestion(data) {
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/questions', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({data}),
      headers: {
       'Content-Type' : 'application/json'
     }
    })
    .then((res) => res.json())
    .then((question) => {
      dispatch({type: "ADD_QUESTION", payload: question}, console.log(question))
    })
  }
}

export function deleteQuestion(question) {
  return {
    type: "DELETE_QUESTION",
    payload: {question}
  }
}
