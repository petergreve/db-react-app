import {
  FETCH_PERSON,
  FETCH_PERSON_SUCCESS,
  FETCH_FACILITY_SUCCESS,
  FETCH_EXPOSURE_SUCCESS,
  SHOW_RESULT_MODAL,
  HIDE_RESULT_MODAL,
} from '../constants'

const initState = {
  showResult: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        initState
    }

    case FETCH_PERSON_SUCCESS:
      return {
        ...state,
        ...action.payload
      }

    case FETCH_FACILITY_SUCCESS:
      return {
        ...state,
        ...action.payload
      }

    case FETCH_EXPOSURE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case SHOW_RESULT_MODAL:
      return {
        ...state,
        showResult: true
      }

    case HIDE_RESULT_MODAL:
      return {
        ...state,
        showResult: false
      }

    default:
      return state
  }
}

export default reducer