import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Персонажи из <code>Звездных войн</code>.
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/people">Персонажи</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
