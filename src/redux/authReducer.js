// import {InferActionsTypes} from './redux-store';
const AUTH = 'AUTH'

export const initialState = {
  auth: false,
  user:{
    token: '',
    login: '',
    password: '',
    authorized: false
  },
  errors:{
    password: true,
    login: true,
    registered: false
  }

};

export const actionAuth = (auth) => {
  return { type: AUTH, auth };
};

export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return { ...state, auth };
    }
    default: {
      return state;
    }
  }
};

export const authThunkCreater = (login, password) => async (dispath) => {
  let res = await setTimeOut(()=>{
      console.log('Auth:' +  login, password)
      return 200
  }, 2000)
  return (dispatch) => {
    if(res === 200) dispatch(actionAuth(true));
    if(res != 200) dispatch(actionAuth(false));
  };
};
