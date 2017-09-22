

function usersReducer(state = {list: []}, action) {

  switch (action.type) {
    case "ADD_USER":
      return Object.assign({}, state, {list: [...state.list, action.payload]})
    case "REMOVE_USER":
      const filteredArray = state.users.filter((user) => user.id !== action.payload.id)
      return Object.assign({}, state, {list: filteredArray})
    default:
      return state
}
}

export default usersReducer
