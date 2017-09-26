

function usersReducer(state = {list: []}, action) {

  switch (action.type) {
    case "ADD_USER":
      const obj = Object.assign({}, state, {list: [...state.list, action.payload]})
      // console.log (obj)
      return obj
    case "FIND_USER":
      console.log(action)
      localStorage.setItem('token', action.payload.jwt)
      return state

    case "REMOVE_USER":
      const filteredArray = state.users.filter((user) => user.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})
    default:
      return state
}
}

export default usersReducer
