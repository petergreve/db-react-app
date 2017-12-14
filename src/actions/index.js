import {
  FETCH_PERSON,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAILED,
  FETCH_FACILITY,
  FETCH_FACILITY_SUCCESS,
  FETCH_FACILITY_FAILED,
  FETCH_EXPOSURE,
  FETCH_EXPOSURE_SUCCESS,
  FETCH_EXPOSURE_FAILED,
  SHOW_RESULT_MODAL,
  HIDE_RESULT_MODAL,
} from '../constants';
 
export const fetchPerson = id => (
  {
    type: FETCH_PERSON,
    payload: id,
  }
)

export const fetchPersonSuccess = payload => (
  {
    type: FETCH_PERSON_SUCCESS,
    payload,
  }
)

export const fetchPersonFailed = err => (
  {
    type: FETCH_PERSON_FAILED,
    payload: err,
  }
)

export const fetchFacility = id => (
  {
    type: FETCH_FACILITY,
    payload: id,
  }
)

export const fetchFacilitySuccess = payload => (
  {
    type: FETCH_FACILITY_SUCCESS,
    payload,
  }
)

export const fetchFacilityFailed = err => (
  {
    type: FETCH_FACILITY_FAILED,
    payload: err,
  }
)

export const fetchExposure = id => (
  {
    type: FETCH_EXPOSURE,
    payload: id,
  }
)

export const fetchExposureSuccess = payload => (
  {
    type: FETCH_EXPOSURE_SUCCESS,
    payload,
  }
)

export const fetchExposureFailed = err => (
  {
    type: FETCH_EXPOSURE_FAILED,
    payload: err
  }
)

export const showResultModal = () => (
  {
    type: SHOW_RESULT_MODAL
  }
)

export const hideResultModal = () => (
  {
    type: HIDE_RESULT_MODAL
  }
)