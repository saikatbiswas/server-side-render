
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from "../client/store/reducers";

export default (req)=> {
  console.log('cook',req.cookies['x-access-token']);
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  const axiosInstance = axios.create({
    // baseURL: 'http://react-ssr-api.herokuapp.com',
    baseURL: 'http://localhost:3001/api',
    // headers: { cookie: req.get('cookie') || '' }
    headers: {'Authorization': `Bearer ${req.cookies['x-access-token']}` || '' }
  });

    const store = createStore(
      reducers,
      {},
      applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );


    return store;
};