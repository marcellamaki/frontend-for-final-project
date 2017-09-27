function questionsReducer(state = {questions: []}, action) {

  switch (action.type) {
    case "ADD_QUESTION":
      return Object.assign({}, state, {questions: [...state.questions, action.payload]})
    default:
      return state
}
}

export default questionsReducer
