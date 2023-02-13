import { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from '../../redux/actions/signupActions';

class Logout extends Component {

    componentDidMount = () => {
        this.props.logout();
    }

    render() {
        return <Redirect to='/' />;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);