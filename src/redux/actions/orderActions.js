import axios from "../../axios-orders";

export const loadOrders = (userId) => {
    return function(dispatch, getState) {
        // Захиалгыг татаж эхэллээ
        dispatch(loadOrdersStart());

        const token = getState().userReducer.token;

        axios
          .get(`/orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
          .then(response => {
            const loadedOrders = Object.entries(response.data).reverse();
            dispatch(loadOrdersSuccess(loadedOrders));
            this.setState({orders: Object.entries(response.data).reverse()});
          })
          .catch(err => dispatch(loadOrdersError(err)));
    }
}

export const loadOrdersStart = () => {
    return {
        type: 'LOAD_ORDERS_START'
    }
}

export const loadOrdersSuccess = (loadedOrders) => {
    return {
        type: 'LOAD_ORDERS_SUCCESS',
        orders: loadedOrders
    }
}

export const loadOrdersError = (error) => {
    return {
        type: 'LOAD_ORDERS_ERROR',
        error
    }
}

// Захиалга хадгалах
export const saveOrder = (newOrder) => {
    return function(dispatch, getState) {
        // Spinner эргэлдүүлнэ
        dispatch(saveOrderStart());

        const token = getState().userReducer.token;

        // Firebase-рүү хадгална
        axios
            .post(`/orders.json?auth=${token}`, newOrder)
            .then((response) => {
                dispatch(saveOrderSuccess());
            })
            .catch(error => {
                dispatch(saveOrderError(error));
            })
            // .finally(() => {
            //     this.setState({ loading: false });
            //     this.props.history.replace('/orders');
            // });
    }
}

export const saveOrderStart = () => {
    return {
        type: 'SAVE_ORDER_START'
    }
}

export const saveOrderSuccess = () => {
    return {
        type: 'SAVE_ORDER_SUCCESS'
    }
}

export const saveOrderError = (error) => {
    return {
        type: 'SAVE_ORDER_ERROR',
        error
    }
}