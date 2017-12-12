export const FETCH_PERSON = 'FETCH_PERSON'
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS'
export const FETCH_PERSON_FAILED = 'FETCH_PERSON_FAILED'
export const SHOW_RESULT_MODAL = 'SHOW_RESULT_MODAL'
export const HIDE_RESULT_MODAL = 'HIDE_RESULT_MODAL'

export const fetchPerson = id => {
  return {
    type: FETCH_PERSON,
    id,
  }
}

export const fetchPersonSuccess = payload => (
  {
    type: FETCH_PERSON_SUCCESS,
    payload,
  }
)

export const fetchPersonFailed = () => (
  {
    type: FETCH_PERSON_FAILED,
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