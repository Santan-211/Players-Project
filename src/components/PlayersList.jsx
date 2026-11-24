
import React from 'react';
import Player from './Player';
import players from '../players';

function PlayersList() {
  return (
    <div className="players-container">
      {players.map((player) => (
        <Player
          key={player.name}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
}

export default PlayersList;
