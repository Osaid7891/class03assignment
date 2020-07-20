import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({name}) {
  return (
    <div>
     Hello {name}!
     <h2> I am learning React JS from Panacloud </h2>
     <ul>
      <li>Components</li>
      <li>Hooks</li>
      <li>States</li>
      <li>Django Rest Framework</li>
      <li><span> {5 + 20} </span> </li>
     </ul>
    </div>
  );
}

export default App;
