import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import remindersReducer from './reducers/remindersReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import CreateUserForm from './components/CreateUserForm'

const rootReducer = combineReducers({users: usersReducer, reminders: remindersReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
