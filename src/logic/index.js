import { createLogic } from 'redux-logic';

import api from '../api';
import { fetchPersonSuccess, fetchPersonFailed, fetchFacility, fetchFacilitySuccess, fetchFacilityFailed, fetchExposure, fetchExposureSuccess, fetchExposureFailed, showResultModal } from '../actions';

import { FETCH_PERSON, FETCH_FACILITY, FETCH_EXPOSURE } from '../constants';

const fetchPersonLogic = createLogic({
  type: FETCH_PERSON,
  latest: true,
  process({ getState, action }, dispatch, done) {
    api.fetchPerson(action.payload)
      .then(result => {
        dispatch(fetchPersonSuccess(result));
        dispatch(fetchFacility(result.val1));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchPersonFailed(err));
      })
      .then(() => done());
  }
});

const fetchFacilityLogic = createLogic({
  type: FETCH_FACILITY,
  latest: true,
  process({ getState, action }, dispatch, done) {
    api.fetchFacility(action.payload)
      .then(result => {
        dispatch(fetchFacilitySuccess(result));
        dispatch(fetchExposure(getState().val2));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFacilityFailed(err));
      })
      .then(() => done());
  }
});

const fetchExposureLogic = createLogic({
  type: FETCH_EXPOSURE,
  latest: true,
  process({ getState, action }, dispatch, done) {
    api.fetchExposure(action.payload)
      .then(result => {
        dispatch(fetchExposureSuccess(result));
        dispatch(showResultModal());
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchExposureFailed(err));
      })
      .then(() => done());
  }
});

export default [
  fetchPersonLogic,
  fetchFacilityLogic,
  fetchExposureLogic
];