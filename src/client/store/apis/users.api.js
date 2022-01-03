import axios from "axios";
axios.defaults.baseURL = 'http://react-ssr-api.herokuapp.com';

export const getUser = ()=>{
    return axios.get(`/users`);
}