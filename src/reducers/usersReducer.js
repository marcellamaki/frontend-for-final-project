

function usersReducer(state = {list: [], currentUser: {}}, action) {

  switch (action.type) {
    case "ADD_USER":
      const obj = Object.assign({}, state, {list: [...state.list, action.payload]})
      // console.log (obj)
      return obj
    case "FIND_USER":
        console.log("payload", action.payload)
        localStorage.setItem('token', action.payload.jwt)
        const currentUser = Object.assign({}, state, {currentUser: action.payload.user})
        console.log(currentUser)
        return currentUser

    case "REMOVE_USER":
      const filteredArray = state.users.filter((user) => user.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})
    default:
      return state
}
}

export default usersReducer
