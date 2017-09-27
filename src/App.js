import React, { Component } from 'react';
import './App.css';
import CreateUserForm from './components/CreateUserForm.js'
import QuestionReminderBundle from './containers/QuestionReminderBundle.js'
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.js'
import ProfileContainer from './containers/ProfileContainer'


class App extends Component {

  render() {
    return (
      <div>
        <Route path='/login' render={(history) => <LoginForm history={history}/>} />
        <Route path='/signup' render={() => <CreateUserForm />} />
        <Route path='/questions/new' render={() => <QuestionReminderBundle />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
      </div>
    );
  }
}

export default withRouter(App);
