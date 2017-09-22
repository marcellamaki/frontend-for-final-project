//make this just a functional component

import React from 'react';
import { Route, Link } from 'react-router-dom';

class Welcome extends React.Component {

  render(){
    return(
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae porta risus. Fusce consectetur in sem eget semper. Donec ac magna vitae nisl molestie posuere sed et odio. Sed mollis, nunc volutpat lacinia bibendum, dui nulla tincidunt orci, ut rhoncus urna mauris vitae lorem. Donec varius elit non semper tempor. Fusce eget tristique lorem. Pellentesque viverra dui nibh, in fringilla orci commodo at. In gravida tempor nulla, ac egestas mi auctor in. Vivamus lacinia aliquam urna, ut porta justo. Praesent tincidunt pellentesque ante pulvinar tempor. In vitae nunc non felis aliquet viverra. Vivamus placerat tortor sed turpis fringilla, vitae fringilla mauris semper.</p>
        <button><Link to="/login">Log In</Link></button>OR<button><Link to="/signup">Sign Up</Link></button>
      </div>
    )
  }

}

export default Welcome;
