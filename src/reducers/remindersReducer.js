function remindersReducer(state = {reminders: []}, action) {

  switch (action.type) {
    case "ADD_REMINDER":
      return Object.assign({}, state, {reminders: [...state.reminders, action.payload]})
    case "REMOVE_REMINDER":
      const filteredArray = state.reminders.filter((user) => user.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})
    default:
      return state
}
}

export default remindersReducer
