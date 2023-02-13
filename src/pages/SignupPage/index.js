import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from '../../components/General/Button';
import Spinner from "../../components/General/Spinner";
import * as actions from '../../redux/actions/signupActions';

import css from './style.module.css';

class SignupPage extends Component {
    state = {
        email: '',
        password1: '',
        password2: '',
        error: ''
    }

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    changePassword1 = (e) => {
        this.setState({password1: e.target.value})
    }

    changePassword2 = (e) => {
        this.setState({password2: e.target.value})
    }

    signup = () => {
        if(this.state.password1 === this.state.password2) {
            this.props.signupUser(this.state.email, this.state.password1)
        } else {
            this.setState({error: 'Нууц үгнүүд хоорондоо таарахгүй байна!'});
        }
    }

    render() {
        return <div className={css.Signup}>
            {this.props.userId && <Redirect to='/' />}
            <h2>Бүртгүүлэх</h2>
            <div>Та өөрийн мэдээллээ оруулна уу!</div>
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={this.changePassword1} type="password" placeholder="Нууц үгээ оруулна уу!" />
            <input  onChange={this.changePassword2} type="password" placeholder="Нууц үгээ давтан оруулна уу!" />
            {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
            {this.state.firebaseError && <div style={{ color: 'red' }}>{this.props.firebaseError}</div>}
            {this.props.saving && <Spinner />}
            <Button text='БҮРТГҮҮЛЭХ' btnType='Success' clicked={this.signup} />
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        saving: state.userReducer.saving,
        firebaseError: state.userReducer.firebaseError,
        userId: state.userReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);