import React from 'react';
import player1 from './images/1.jpg';
import player2 from './images/2.jpg';
import player3 from './images/3.jpg';

const images = [player1, player2, player3];

const Player = ({ id, name, country, votes, voteForPlayer }) => {
  return (
    <div className="player-card">
      <img src={images[id - 1]} alt={name} /> {/* Adjusting index to match array index */}
      <h2>{name}</h2>
      <p>{country}</p>
      <button onClick={() => voteForPlayer(id)}>Vote</button>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default Player;
