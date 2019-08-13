import reducer, { actions } from '../user'

const stateLoggedOut = {
  isAuthenticated: false,
  details: {
    email: undefined
  }
}

const userData = {
  email: 'test@test.com'
}
const stateLoggedIn = {
  isAuthenticated: true,
  details: {
    email: userData.email
  }
}

describe('user reducer', () => {
  it('returns initial state when user is not logged in', () => {
    expect(reducer(undefined, {})).toEqual(stateLoggedOut)
  })

  it('handles user login', () => {
    const actionPayload = {
      type: actions.LOGIN_USER_SUCCESS,
      email: userData.email
    }

    expect(reducer(undefined, actionPayload)).toEqual(stateLoggedIn)
  })

  it('handles user logout', () => {
    const actionPayload = { type: actions.LOGOUT_USER_SUCCESS }

    expect(reducer(undefined, actionPayload)).toEqual(stateLoggedOut)
  })

  it('handles error on login', () => {
    const actionPayload = { type: actions.LOGIN_USER_ERROR }

    expect(reducer(undefined, actionPayload)).toEqual(stateLoggedOut)
  })
})
