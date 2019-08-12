import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dashboard } from 'screens/Dashboard'
import { logout } from 'ducks/user'

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(null, mapDispatchToProps)(Dashboard))

