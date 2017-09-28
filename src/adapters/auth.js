class Auth {
  static login(userParams) {
    const userJSON = JSON.stringify(userParams)
    return fetch('http://localhost:3000/api/v1/login',{
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then((res) => res.json())
    .then((user) => console.log(user))
  }

  static signup() {

  }

  static logOut() {
    localStorage.removeItem('token')
  }
}





export default Auth
