import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CityContextProvider } from './Context/CityContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CityContextProvider>
        <Router>
          <App />
        </Router>
      </CityContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
