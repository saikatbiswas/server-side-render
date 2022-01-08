import cookie from 'react-cookies';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  // console.log(api);
  // const res = await api.get('/users');
  // console.log(api.get('/products/all'));
  try{
    // console.log('api fvgdfgdfg ===================',api);
    // console.log('api fvgdfgdfg',api.baseURL,'/products/all');
    const res = await api.get(`/products/all`);
    // const res = await api.get('/users');

    // console.log('res', res);

    dispatch({
      type: FETCH_USERS,
      payload: res
    });

  }catch(error){
      console.log(error);
  }
  
};

export const USER_LOGIN = 'user_login';
export const getUserLogin = (data) => async (dispatch, getState, api) => {
  try{
    const user = await api.post(`/auth/signin`,{
      userid:data.email,
      password:data.password
    });

    dispatch({
      type: USER_LOGIN,
      payload: user.data
    });
  }catch(error){
    
  }
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  // console.log('1');
  try{
    // console.log('111');
    // const res = await api.get('/current_user');
    const res = await api.get('/auth/isAuth');

    // console.log('111111');
    // console.log(res);

    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res
    });

  }catch(error){

  }
};

export const USER_SIGN_OUT = 'user_sign_out';
export const userSignOut = () => async (dispatch, getState, api) => {
    try{

      console.log('1111111111111');

      cookie.remove('x-access-token', {path:'/'});

      dispatch({
        type: USER_SIGN_OUT
      });
    }catch(error){

    }
}

export const FETCH_ADMINS = 'fetch_admins';
export const getAllAddress = (id) => async (dispatch, getState, api) => {
  try{
    const res = await api.get(`/address/all`);

    dispatch({
      type: FETCH_ADMINS,
      payload: res.data
    });

  }catch(error){

  }
}


// export const FETCH_ADMINS = 'fetch_admins';
// export const fetchAdmins = () => async (dispatch, getState, api) => {
//   const res = await api.get('/admins');

//   dispatch({
//     type: FETCH_ADMINS,
//     payload: res
//   });
// };