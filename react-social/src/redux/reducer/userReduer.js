export function userReducer(state, action) {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
      }
    default: return state;
  }
}