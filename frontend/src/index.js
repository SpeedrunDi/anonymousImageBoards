import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import reducer from "./store/reducer";
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
