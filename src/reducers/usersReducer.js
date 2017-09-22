

function usersReducer(state = {users: []}, action) {

  switch (action.type) {
    case "ADD_USER":
      return Object.assign({}, state, {users: [...state.users, action.payload]})
    case "REMOVE_USER":
      const filteredArray = state.users.filter((user) => user.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})
    default:
      return state
}
}

export default usersReducer
