import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1> Normalish Food </h1>
        <ul class="leaders">
          <li>
            <span>Grilled Cheese</span>
            <span>7.95</span>
          </li>
          <li>
            <span>Wonton Soup</span>
            <span>8.95</span>
          </li>
          <li>
            <span>Waffles</span>
            <span>7.95</span>
          </li>
          <li>
            <span>Shrimp Etouffee</span>
            <span>15.25</span>
          </li>
          <li>
            <span>Miso Ramen</span>
            <span>10.95</span>
          </li>
        </ul>
        <hr class="fancy-rule asterism"/>
        <hr class="fancy-rule asterism rgba"/>
        <h1> Delicacies </h1>
        <ul class="leaders">
          <li>
            <span>Bear Foot Soup</span>
            <span>7.95</span>
          </li>
          <li>
            <span>Fried Raptor Eggs</span>
            <span>24.95</span>
          </li>
          <li>
            <span>Raspberry Asparagus Creme Brulée</span>
            <span>13.95</span>
          </li>
        </ul>
        </div>
        </div>
  );
}

export default App;
