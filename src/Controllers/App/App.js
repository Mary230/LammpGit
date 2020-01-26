import {connect} from 'react-redux';
import {increment, decrement} from '../../Store/store';
import App from '../../Component/App/App'

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
});
const mapStateToProps = ({counter}) => ({
    counter
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);