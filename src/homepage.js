import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const Homepage = () => (
  <div>
    <h1>Turtle</h1>
  </div>
);


ReactDOM.render(<Homepage />, document.getElementById('homepage'));
