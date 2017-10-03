import React, { Component } from 'react';
import './App.css';
import CreateUserForm from './components/CreateUserForm.js'
import QuestionReminderBundle from './containers/QuestionReminderBundle.js'
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm.js'
import ProfileContainer from './containers/ProfileContainer';
import authorize from './components/hocs/authorize';
import NavBar from './components/NavBar.js'
import {fetchUser}  from './actions/users'
import { connect } from 'react-redux';
import Auth from './adapters/auth.js';
import { fetchQuestions } from './actions/questions';
import Welcome from './components/welcome.js';
import Logout from './components/logout.js'
import EditCheckins from './components/EditCheckins.js'


class App extends Component {


  componentWillMount() {
    if(!!localStorage.getItem("token") && Object.keys(this.props.currentUser).length == 0) {
      this.props.fetchUser()
      console.log(this.props.currentUser)
  }
}


  loginUser = (userParams) => {
  Auth.login(userParams)
    .then(user => {
      localStorage.setItem('token', user.jwt)
      this.setState({
        currentUser: user,
        isLoggedIn: true
      })

    })
  }

  render() {
    const AuthProfile = authorize(ProfileContainer)
    return (
      <div className="container">
        <Route path='/' render={() => <NavBar />} />
        <Route exact path='/' render={() => <Welcome />} />
        <Route path='/login' render={(history) => <LoginForm history={history}/>} />
        <Route path='/signup' render={(history) => <CreateUserForm history={history}/>} />
        <Route path='/questions/new' render={() => <QuestionReminderBundle />} />
        <Route path='/profile' component={AuthProfile}/>
        <Route path='/logout' render={(history) => <Logout history={history}/>} />
        <Route path='/questions/edit' render={() => <EditCheckins />} />
      </div>
    );
  }
}

function mapStatetoProps(state){
  return {
    currentUser: state.users.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => {
      dispatch(fetchUser())
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
