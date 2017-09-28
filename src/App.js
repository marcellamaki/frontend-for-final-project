import React, { Component } from 'react';
import './App.css';
import CreateUserForm from './components/CreateUserForm.js'
import QuestionReminderBundle from './containers/QuestionReminderBundle.js'
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.js'
import ProfileContainer from './containers/ProfileContainer';
import authorize from './components/hocs/authorize';
// import fetchUser from './actions/users.js'
import NavBar from './components/NavBar.js'
import {fetchUser}  from './actions/users'
import { connect } from 'react-redux';
import Auth from './adapters/auth.js'


class App extends Component {


  componentWillMount() {
    // console.log(jwt_decode(localStorage.getItem('token')))
    if(!!localStorage.getItem("token") && Object.keys(this.props.currentUser).length == 0) {
      this.props.fetchUser()
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

  //
  // handleButtonClick = () => {
  // Auth.me().then(user => {
  //   console.log(user)
  //
  // })
  //
  // }

  render() {
    const AuthProfile = authorize(ProfileContainer)
    return (
      <div>
        <Route path='/' render={() => <NavBar />} />
        <Route path='/login' render={(history) => <LoginForm history={history}/>} />
        <Route path='/signup' render={(history) => <CreateUserForm history={history}/>} />
        <Route path='/questions/new' render={() => <QuestionReminderBundle />} />
        <Route path='/profile' component={AuthProfile}/>
      </div>
    );
  }
}

function mapStatetoProps(state){
  return {
    currentUser: state.users.currentUser
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
