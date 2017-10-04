import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import questionsReducer from './reducers/questionsReducer';
import remindersReducer from './reducers/remindersReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './components/welcome.js'
// import CreateUserForm from './components/CreateUserForm'

const rootReducer = combineReducers({users: usersReducer, reminders: remindersReducer, question: questionsReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))
// console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
