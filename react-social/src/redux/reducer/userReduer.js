import { HIDE_LOGIN_MODAL, SHOW_LOGIN_MODAL } from '../constants';

const initialState = {
  showModal: false,
}

export default function userReducer(state= initialState, action) {
  switch(action.type) {
    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal,
      }
    case HIDE_LOGIN_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal,
      }
    default: return state;
  }
}