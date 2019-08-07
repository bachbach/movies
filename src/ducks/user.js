import AuthService from 'services/AuthService'

const authService = new AuthService()

export const LOGIN_USER_SUCCESS = Symbol('LOGIN_USER_SUCCESS')
export const LOGIN_USER_ERROR = Symbol('LOGIN_USER_ERROR')

const loginUserSuccess = (token) => ({ type: LOGIN_USER_SUCCESS, token })

const loginUserError = (error) => ({ type: LOGIN_USER_ERROR, error })

export const loginUser = ({ email, password }) => {
  return async dispatch => {
    try {
      await authService.login(email, password)

      dispatch(loginUserSuccess(email))
      return email
    } catch (e) {
      return dispatch(loginUserError(e.response.data))
    }
  }
}

const userData = authService.storageService.get('user', {})
const initState = {
  isAuthenticated: !!authService.storageService.get('token', false),
  details: {
    uuid: userData.uuid,
    email: userData.email
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        details: action.user
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        details: {}
      }
    default:
      return state
  }
}