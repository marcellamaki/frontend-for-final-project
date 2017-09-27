function remindersReducer(state = {reminders: []}, action) {

  switch (action.type) {
    case "ADD_REMINDER":
      return Object.assign({}, state, {reminders: [...state.reminders, action.payload]})
    default:
      return state
}
}

export default remindersReducer
