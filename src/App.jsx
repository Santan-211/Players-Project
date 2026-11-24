
import React from 'react';
import PlayersList from './components/PlayersList';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>FIFA PLAYER CARDS</h1>
        <p>Meet the stars of world football</p>
      </header>

      <PlayersList />
    </div>
  );
}

export default App;
