import {LOGIN_ROUTE} from "../constants/RouteConstants.js";

export const getUser = () => {
  return localStorage.getItem('user')
}
export const getUserAccessToken = () => {
  return localStorage.getItem('access_token')
}

export const logoutUser = (navigate) => {
  localStorage.clear();
  navigate(LOGIN_ROUTE);

}
