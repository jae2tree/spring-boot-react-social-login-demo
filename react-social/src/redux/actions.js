import {HIDE_LOGIN_MODAL, SHOW_LOGIN_MODAL} from './constants';

export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL,
  payload: {
    showModal: false,
  }
})

export const showLoginModal = () => ({
  type: SHOW_LOGIN_MODAL,
  payload: {
    showModal: true,
  }
})