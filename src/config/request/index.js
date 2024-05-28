import axios from 'axios';
// import cookies from 'js-cookie';
import getCookie from '@/utils/getCookie';


const baseURL = 'https://some-domain.com/api/'
const timeout = 6000

const instance = axios.create({
    // baseURL,
    timeout,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'DELETE,PUT,POST,GET,OPTIONS',
        'Content-type': 'application/json; charset=UTF-8',
        'withCredentials': true,
    }
  });


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = getCookie('token')
    config.headers.set('X-Token', 'testToken')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    switch (response.status) {
        case 200:
          return Promise.resolve(response);

        default:
            break;
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



export default instance