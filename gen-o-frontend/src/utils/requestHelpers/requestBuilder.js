import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL
console.log("BASE URL", import.meta.env.BASE_URL)
console.log("VITE_API_URL", import.meta.env.VITE_API_URL)
const APIURL = import.meta.env.VITE_API_URL
const authRequestClient = axios.create({
  baseURL: APIURL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }
})

export const signUp = (payload) => {
  console.log("sending request");
  return axios.post('users/patient/registration/', {...payload})
}

export const login = (payload) => {
  return axios.post('users/login/', {...payload})
}
