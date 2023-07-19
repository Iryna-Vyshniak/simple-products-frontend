import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:3500/api`,
  // baseURL: `https://simple-products-backend.onrender.com/api`,
});

export const setToken = (token) => {
  if (!token) {
    return (instance.defaults.headers.authorization = '');
  }
  instance.defaults.headers.authorization = `Bearer ${token}`;
  // instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//export const dellToken = () => {
// instance.defaults.headers.authorization = '';
//instance.defaults.headers.common['Authorization'] = '';
// instance.defaults.headers.common.Authorization = '';
//};

//  register
export const signUp = async (body) => {
  // console.log(body);
  const { data: result } = await instance.post('/auth/signup', body);
  // console.log('REGISTER RESULT', result);
  return result;
};

// verify
export const verify = async (verificationToken) => {
  const { data: result } = await instance.get(`/auth/verify/${verificationToken}`);
  return result;
};

// login
export const signIn = async (body) => {
  const { data: result } = await instance.post('/auth/signin', body);
  // console.log('LOGIN RESULT', result);
  // console.log('LOGIN RESULT token', result.token);
  setToken(result.token);
  return result;
};

// logout
export const logOut = async () => {
  const { data } = await instance.post('/auth/logout');
  setToken();
  return data;
};

// get current
// export const getProfile = () => {
//   const response = instance.get('/auth/current');
//   return response.data;
// };
export const getProfile = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    // console.log('CURRENT USER', data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
