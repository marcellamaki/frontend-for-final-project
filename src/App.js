import React, { Component } from 'react';
import './App.css';
import CreateUserForm from './components/CreateUserForm.js'
import CreateQuestionForm from './components/CreateQuestionForm.js'
import LoginForm from './components/LoginForm.js'
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Route path='/login' render={() => <LoginForm />} />
        <Route path='/signup' render={() => <CreateUserForm />} />
        <Route path='/questions/new' render={() => <CreateQuestionForm />} />
      </div>
    );
  }
}

export default withRouter(App);
