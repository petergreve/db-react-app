import * as actions from '../actions'
import * as types from '../constants'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const id = 123
    const expectedAction = {
      type: types.FETCH_PERSON,
      payload: id
    }
    expect(actions.fetchPerson(id)).toEqual(expectedAction)
  })
})