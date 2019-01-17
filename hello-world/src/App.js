import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import logoPlatzi from './platzi.png'

class App extends Component {
  state = {
    logo: logo,
    nombre: 'Jasan'
  }
  onClick() {
    this.setState({
      logo: logoPlatzi,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <img 
              key={this.state.logo}
              src={this.state.logo} 
              className="App-logo" 
              alt="logo" 
            />
          </CSSTransitionGroup>
          <p>
            Welcome to Animations
          </p>
          <button onClick={this.onClick.bind(this)}>Click me!</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
