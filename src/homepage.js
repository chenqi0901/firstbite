import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const Homepage = () => (
  <div>
    <h1>Turtle</h1>
    <p>I need to figure out what I should do with this project. A family recipe collection places??</p>
  </div>
);


ReactDOM.render(<Homepage />, document.getElementById('homepage'));
