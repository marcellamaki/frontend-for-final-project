function questionsReducer(state = {list: [], questions: [], mostRecent: []}, action) {
  switch (action.type) {
    case "ADD_QUESTION":
      // debugger
      return Object.assign({}, state, {list: [...state.questions, action.payload], mostRecent: action.payload})

    case "SET_QUESTION_LIST":
      console.log("setting question list")
      return Object.assign({}, state, {list: action.payload})

      case "DELETE_QUESTION":
        const filteredArray = state.list.filter((question) => question.id !== action.payload.id)
        console.log(filteredArray)
        return Object.assign({}, state, {list: filteredArray})

    default:
      return state
}
}

export default questionsReducer
