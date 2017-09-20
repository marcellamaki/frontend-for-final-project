import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import questionsReducer from './reducers/questionsReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(questionsReducer, applyMiddleware(thunk))
console.log(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
