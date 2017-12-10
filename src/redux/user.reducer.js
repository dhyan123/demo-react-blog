import axios from 'axios';

const ERROR_MSG = 'ERROR_MSG';
const REGISTER_SUCC = 'REGISTER_SUCC';
const ONLOADING = 'ONLOADING';
const OFFLOADING = 'OFFLOADING';

const init = {
  login: false,
  loading: false,
  redirect: ''
};

export function userReducer(state = init, action){
  if(action.type === ERROR_MSG){
    return {...state, msg: action.msg}
  }
  if(action.type === REGISTER_SUCC){
    return {...state, msg: '', ...action.payload}
  }
  if(action.type === ONLOADING){
    console.log('loading');
    return {...state, loading: true}
  }
  if(action.type === OFFLOADING){
    console.log('off');
    return {...state, loading: false}
  }
  return state;
}

export function userRegister({userName, password}){
  if(!userName || !password) return errorMsg('用户名密码必须输入');
  return (dispatch) => {
    dispatch(onLoading());
    axios.post('/api/register', {userName, password})
    .then((res) => {
      if(res.status === 200 && res.data.code === 0){
        dispatch(registerSucc(res.data.data));
      }else{
        dispatch(errorMsg(res.data.msg));
      }
      dispatch(offLoading());
    });
  };
}


// -----------------------------------------------
function errorMsg(msg){
  return {msg, type: ERROR_MSG}
}

function registerSucc(data){
  console.log(data);
  return {type: REGISTER_SUCC, payload: data}
}

function onLoading(){
  console.log(1);
  return {type: ONLOADING, loading: true}
}

function offLoading(){
  return {type: OFFLOADING, loading: false}
}





















