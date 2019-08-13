import AuthService from 'services/AuthService'

const authService = new AuthService()

export const actions = {
  LOGIN_USER_SUCCESS: Symbol('LOGIN_USER_SUCCESS'),
  LOGIN_USER_ERROR: Symbol('LOGIN_USER_ERROR'),
  LOGOUT_USER_SUCCESS: Symbol('LOGOUT_USER_SUCCESS'),
}


const loginUserSuccess = (email) => ({ type: actions.LOGIN_USER_SUCCESS, email })
const loginUserError = (error) => ({ type: actions.LOGIN_USER_ERROR, error })

export const loginUser = ({ email, password }) => {
  return async dispatch => {
    try {
      await authService.login(email, password)
      
      dispatch(loginUserSuccess(email))
      return email
    } catch (e) {
      console.log(e)
      return dispatch(loginUserError(e.response.data))
    }
  }
}

const logoutUserSuccess = () => ({ type: actions.LOGIN_USER_SUCCESS })

export function logout () {
  return (dispatch) => {
    authService.storageService.rm('token')
    authService.storageService.rm('user')

    return dispatch(logoutUserSuccess())
  }
}

const userData = authService.storageService.get('user', {})
const initState = {
  isAuthenticated: !!authService.storageService.get('token', false),
  details: {
    email: userData.email
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        details: {
          email: action.email
        }
      }
    case actions.LOGOUT_USER_SUCCESS:
    case actions.LOGIN_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        details: {}
      }
    default:
      return state
  }
}