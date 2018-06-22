import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../src/bootstrap/button';
import Jumbotron from './bootstrap/Jumbotron';
import './App.css';

class App extends Component {

  render() {
    return (
      <Jumbotron
        className="-fluid text-sm-center"
        containerFluid={true}
        style={{backgroundImage: 'url(img/railway-tracks.jpg)'}}>
        <h1>Build ReactJs User Interfaces</h1>
        <p>with Bootstrap and Sass</p>
        <p>
          <Button disabled className="-primary" href="https://www.google.com" target="_blank"/>
          <Button disabled className="-danger-outline -sm" />
          <Button disabled className="-primary-outline -lg -block" />
        </p>
      </Jumbotron>
    );
  }
}

export default App;
