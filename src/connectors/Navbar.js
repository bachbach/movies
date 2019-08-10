import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar } from 'components/Navbar'
import { logout } from 'ducks/user'

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(withRouter(Navbar))