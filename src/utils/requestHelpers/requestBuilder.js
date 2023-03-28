import axios from "axios";
import _ from 'lodash'

const APIURL = import.meta.env.VITE_API_URL
axios.defaults.baseURL = APIURL


const authRequestClient = axios.create({
  baseURL: APIURL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }
})

export const signUp = (payload) => {
  return axios.post('users/patient/registration/', {...payload})
}

export const login = (payload) => {
  return axios.post('users/login/', {...payload})
}

export const patientProfile = (queryParams) => {
  return authRequestClient.get('/patient/me/')
}

export const updatePatientProfile = (payload) => {
  return authRequestClient.patch('/patient/me/update/', {...payload})
}


export const changePassword = (payload) => {
  return authRequestClient.post('users/password-change/', {...payload})
}

export const getPatientMedicalHistory = (qparams, pageParam = 1) => {
  const updatedParams = {page: pageParam}
  const params = new URLSearchParams();
  Object.keys(updatedParams).forEach((key) => {
    if (updatedParams[key]) {
      params.append(key, updatedParams[key]);
    }
  });
  return authRequestClient.get(`/patient/medical-history/`, {params})
}

export const createMedicalHistory = (payload) => {
  return authRequestClient.post('patient/medical-history/create/', {...payload})
}

export const deleteMedicalHistoryRequest = (params) => {
  return authRequestClient.delete(`/patient/medical-history/${params?.id}/delete/`, params)
}

export const updateMedicalHistoryRequest = (payload) => {
  const updatedPayload = _.omit(payload, ['id', 'start_date', 'end_date'])
  return authRequestClient.patch(`/patient/medical-history/${payload?.id}/update/`, {...updatedPayload})
}

export const getPatientRecommendation = (params) => {
  return authRequestClient.get('patient/me/recommendations', {params})
}

export const getPatientResult = (params) => {
  return authRequestClient.get('patient/sample-results/', {params})
}

export const getMedicineList = (params) => {
  return authRequestClient.get('patient/med-list/', {params})
}
