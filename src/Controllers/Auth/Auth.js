import {connect} from 'react-redux';
import {logIn, logout} from '../../Store/authstore';
import Auth from '../../Component/Auth/Auth'

const mapDispatchToProps = dispatch => ({
    logIn: () => dispatch(logIn),
    logout: () => dispatch(logout)
});
const mapStateToProps = (authentication) => ({
    authentication
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);