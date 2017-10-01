import React from 'react';

const Logout = () => {
  localStorage.removeItem("token")
  return(
    <div className="logout">See you soon!</div>

  )
}

export default Logout
