//make this just a functional component

import React from 'react';
import { Route, Link } from 'react-router-dom';
import $ from 'jquery';


class Welcome extends React.Component {

  componentDidMount() {
    this.wavytext()
  }

  wavytext = () => {
    let text = "level";

      for(var i in text) {
        if(text[i] === " ") {
          $(".wavetext").append( $("<span>").html("&nbsp;") );
          console.log("logging")
        } else {
          $(".wavetext").append( $("<span>").text(text[i]) );
        }
      }
  }

  render(){

    return(
      <div>
        <div className="wavetext"></div>
        <hr></hr>
        <center><a className="tagline" href='/intro'>Take Care of Yourself</a></center>
      </div>
    )
  }

}

export default Welcome;
