import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import questionsReducer from './reducers/questionsReducer';
import { Provider } from 'react-redux'


const store = createStore(questionsReducer)
console.log(store)

ReactDOM.(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
