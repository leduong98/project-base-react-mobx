import axios from 'axios';
import queryString from 'query-string';

export const baseURL = process.env.REACT_APP_API_URL;

//Set up default config for http request
// Tao ra 1 object dung chung cho moi noi can import no
const axiosClient = axios.create({
  baseURL: baseURL + '/api',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
  //query string dung de parse url thanh json thay cho axios (tranh tuong hop null url)
  paramsSerializer: (params) => queryString.stringify(params),
});

export default axiosClient;
