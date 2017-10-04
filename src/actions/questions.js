export function addQuestion(data) {
  console.log("data being sent to action:", data)
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
      dispatch({type: "ADD_QUESTION", payload: question}, console.log("This worked and you got back:", question))
    })
  }
}

export function fetchQuestions(data) {
  const id = data.id
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${id}/questions`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({data}),
        headers: {
         'Content-Type' : 'application/json'
       }
      })
      .then((res) => res.json())
      .then((res) =>   {
            dispatch({type: "SET_QUESTION_LIST", payload: res})
        })
    }
    }

    export function deleteQuestion(data) {
      console.log("got to deleteQuestion")
      const id = data
      return function(dispatch){
        console.log("about to fetch")
        fetch(`http://localhost:3000/api/v1/questions/${id}`, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
           'Content-Type' : 'application/json'
         }
        })
        .then((res) => res.json())
        .then((question) => {
          dispatch({type: "DELETE_QUESTION", payload: question}, console.log("This worked and you deleted:", question))
        })
      }
    }
