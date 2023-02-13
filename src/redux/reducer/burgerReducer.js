const initialStates = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 3500,
    purchasing: false,
    ingredientNames: {
        salad: "Салад",
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
    }
};

const INGREDIENT_PRICES = {
    salad: 500,
    cheese: 1000,
    bacon: 2500,
    meat: 5000,
};

const reducer = (state = initialStates, action) => {
    if(action.type === 'ADD_INGREDIENT') {
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
            purchasing: true
        }
    } else if(action.type === 'REMOVE_INGREDIENT') {
        const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer];
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] - 1
            },
            totalPrice: newPrice,
            purchasing: newPrice > 3500
        }
    }
    return state;
}

export default reducer;