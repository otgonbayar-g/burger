import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from '../../components/ContactData';

import css from './style.module.css';

class ShippingPage extends Component {

    cancelOrder = () => {
        this.props.history.goBack();
    }

    showContactData = () => {
        this.props.history.replace('/shipping/contact');
    }

    render() {
        return(
            <div className={css.ShippingPage}>
                <p style={{fontSize: '20px'}}><strong>Таны захиалга</strong></p>
                <p style={{fontSize: '20px'}}><strong>Дүн: {this.props.price}₮</strong></p>
                <Burger />
                <Button clicked={this.cancelOrder} btnType='Danger' text='ЗАХИАЛГЫГ ЦУЦЛАХ' />
                <Button clicked={this.showContactData} btnType='Success' text='ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ' />

                <Route path='/shipping/contact'>
                    <ContactData />
                </Route>

                {/* <Route path='/shipping/contact' render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.price} />)} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    }
}

export default connect(mapStateToProps)(ShippingPage);