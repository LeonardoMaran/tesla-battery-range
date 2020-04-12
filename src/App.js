import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';

function App() {
  return (
    <div>
      <Header />
      <TeslaBattery />
    </div>
  );
}

export default App;
