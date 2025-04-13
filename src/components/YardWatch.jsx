
import React, { useEffect, useState } from 'react';

export default function YardWatch() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    
    fetch('https://mlb-backend-k3uj.onrender.com/predictions/homers')


      .then(res => res.json())
      .then(setPlayers);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Yard Watch</h2>
      {players.map((player, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-700 rounded">
          <p><strong>{player.name}</strong> ({player.team})</p>
          <p>{player.description}</p>
        </div>
      ))}
    </div>
  );
}
