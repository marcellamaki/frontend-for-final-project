

function usersReducer(state = {allUsers: [], currentUser: {}}, action) {

  switch (action.type) {
    case "ADD_USER":
      localStorage.setItem('token', action.payload.jwt)
      console.log(state)
      const obj = Object.assign({}, state, {allUsers: [...state.allUsers, action.payload]})
      // console.log (obj)
      return obj
    case "FIND_USER":
        localStorage.setItem('token', action.payload.jwt)
        const currentUser = Object.assign({}, state, {currentUser: action.payload.user})
        console.log(currentUser)
        return currentUser
    case "SET_USER":
      console.log("payload", action.payload)
      const setUser = Object.assign({}, state, {
        currentUser: action.payload.user,
        userQuestions: action.payload.questions,
        userReminders: action.payload.reminders
      })
      return setUser
    case "REMOVE_USER":
      const filteredArray = state.users.filter((user) => user.id !== action.payload.id)
      return Object.assign({}, state, {allUsers: filteredArray})
    default:
      return state
}
}

export default usersReducer
