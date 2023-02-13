import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from '../../components/General/Button';
import Spinner from "../../components/General/Spinner";
import * as actions from '../../redux/actions/loginActions';

import css from './style.module.css';

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    changePassword = (e) => {
        this.setState({password: e.target.value})
    }

    login = () => {
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        return <div className={css.Login}>
            {this.props.userId && <Redirect to="/orders" />}
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={this.changePassword} type="password" placeholder="Нууц үг" />
            {this.props.signIn && <Spinner />}
            {this.props.firebaseError && <div style={{color: 'red'}}>{this.props.firebaseError} | {this.props.firebaseErrorCode}</div>}
            <Button text='НЭВТРЭХ' btnType='Success' clicked={this.login} />
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        signIn: state.userReducer.signIn,
        firebaseError: state.userReducer.firebaseError,
        firebaseErrorCode: state.userReducer.firebaseErrorCode,
        userId: state.userReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);