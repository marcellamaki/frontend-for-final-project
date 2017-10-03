function questionsReducer(state = {list: [], questions: [], mostRecent: []}, action) {
  switch (action.type) {
    case "ADD_QUESTION":
      // debugger
      return Object.assign({}, state, {list: [...state.questions, action.payload], mostRecent: action.payload.id})
    case "SET_QUESTION_LIST":
      console.log("setting question list")
      return Object.assign({}, state, {list: action.payload})
    default:
      return state
}
}

export default questionsReducer
