import './App.css';
import logo from './Hutchinson software.png'


import React, { Component } from 'react'

export default class App extends Component {
  
  constructor(){
    super();


    this.changeLogo = this.changeLogo.bind(this);

  }

  

  changeLogo(){

    if(document.body.scrollTop > 25) {
  
      document.getElementById("logo").className = "ScrolledLogo";
  
    }
    else {
      document.getElementById("logo").className = "Logo";
    }
  }
  
  render() {
    return (
      <div className="App">


            <img id="logo" className="Logo" onScroll={this.changeLogo} src={logo} alt="logo"></img>

            <span className="TextBody" > <h1> Welcome </h1> </span>
           

      </div>
    )
  }
}


