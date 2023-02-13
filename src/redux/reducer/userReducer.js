const initialState = {
    saving: false,
    signIn: false,
    firebaseError: null,
    firebaseErrorCode: null,
    token: null,
    userId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNUP_USER_START' : return {
            ...state,
            saving: true
        };

        case 'SIGNUP_USER_ERROR' : return {
            ...state,
            saving: false,
            firebaseError: action.error.response.data.error.message,
            firebaseErrorCode: action.error.response.data.error.code
        }

        case 'SIGNUP_USER_SUCCESS' : return {
            ...state,
            saving: false,
            token: action.token,
            userId: action.userId
        }

        case 'LOGIN_USER_START' : return {
            ...state,
            singIn: true
        };

        case 'LOGIN_USER_ERROR' : return {
            ...state,
            signIn: false,
            firebaseError: action.error.response.data.error.message
        }

        case 'LOGIN_USER_SUCCESS' : return {
            ...state,
            signIn: false,
            token: action.token,
            userId: action.userId
        }

        case 'LOGOUT' : return {
            ...state,
            token: null,
            userId: null,
            firebaseError: null,
            firebaseErrorCode: null
        }

        default: return state;
    }
}

export default reducer;