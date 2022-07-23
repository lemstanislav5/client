// import {InferActionsTypes} from './redux-store';
const AUTH = 'AUTH'

export const initialState = {
  auth: false
};

export const actionAuth = () => {
  return { type: AUTH, auth: true };
};

export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return { ...state, auth: true };
    }
    default: {
      return state;
    }
  }
};
