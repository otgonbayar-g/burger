import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './pages/App';

import reportWebVitals from './reportWebVitals';
import burgerReducer from './redux/reducer/burgerReducer';
import orderReducer from './redux/reducer/orderReducer';
import userReducer from './redux/reducer/userReducer';

import './index.css';

const loggerMiddleware = store => {
  return next => {
    return action => {
      console.log('MyLoggerMiddleware: Dispatching ==> ', action);
      console.log('MyLoggerMiddleware: State BEFORE : ', store.getState());
      const result = next(action);
      console.log('MyLoggerMiddleware: State AFTER : ', store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  userReducer
});

const middlewares = [loggerMiddleware, thunk]

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();