import { connect } from 'react-redux'
import { LoginForm } from 'forms/Login'
import { loginUser } from 'ducks/user'

const mapDispatchToProps = (dispatch) => ({
  login: values => dispatch(loginUser(values))
})

export default connect(null, mapDispatchToProps)(LoginForm)
