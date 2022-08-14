import { api } from '../api/api'

const AUTH = 'AUTH'

const initialState = {
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

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return { ...state, auth: action.auth };
    }
    default: {
      return state;
    }
  }
};

export const authThunkCreator = (login, password) => async (dispath) => {
  let res = await api.auth({login, password})
  console.log(res)
  return (dispatch) => {
   
  };
};

// export const getAuthUserData = (): ThunkType => async (dispatch) => {
//   let meData = await authAPI.me()
//   if (meData.resultCode === ResultCodesEnum.Success) {
//       let {id, login, email} = meData.data;
//       dispatch(actions.setAuthUserData(id, email, login, true))
//   }
// }