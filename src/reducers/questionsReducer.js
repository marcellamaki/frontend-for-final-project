function questionsReducer(state = {listS: []}, action) {

  switch (action.type) {
    case "ADD_QUESTION":
      return Object.assign({}, state, {list: [...state.questions, action.payload]})
    case "SET_QUESTION_LIST":
      console.log("setting question list")
      return Object.assign({}, state, {list: action.payload})
    default:
      return state
}
}

export default questionsReducer
