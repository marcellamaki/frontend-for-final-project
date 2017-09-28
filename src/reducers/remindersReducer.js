function remindersReducer(state = {reminders: []}, action) {

  switch (action.type) {
    case "ADD_REMINDER":
      return Object.assign({}, state, {reminders: [...state.reminders, action.payload]})
    case "SET_REMINDER_LIST":
        console.log("setting reminder list")
        return Object.assign({}, state, {list: action.payload})
    default:
      return state
}
}

export default remindersReducer
