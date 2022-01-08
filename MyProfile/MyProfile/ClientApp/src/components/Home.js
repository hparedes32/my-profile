import React, { Component } from 'react';
import myImage from '../images/image1.png';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>DANIEL PAREDES - DEV</h1>
        <p>Welcome to my profile!</p>
        <img src={myImage} alt="BigCo Inc. logo" width={100} height={100}/>
        
      </div>
    );
  }
}
