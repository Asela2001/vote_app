import React, { useState } from 'react';
import Player from './player';
import './App.css';

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Sachin Tendulkar", country: "India", votes: 0 },
    { id: 2, name: "Brian Lara", country: "West Indies", votes: 0 },
    { id: 3, name: "Ricky Ponting", country: "Australia", votes: 0 }
  ]);

  const voteForPlayer = (id) => {
    setPlayers(players.map(player =>
      player.id === id ? { ...player, votes: player.votes + 1 } : player
    ));
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Cricket Player</h1>
      <div className="player-container">
        {players.map(player => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            country={player.country}
            votes={player.votes}
            voteForPlayer={voteForPlayer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
