import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/login">Login</Link> </li>
            </ul>
        </div>
        </div>
  </div>
);

export default Home;