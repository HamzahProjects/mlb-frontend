
import React, { useEffect, useState } from 'react';

export default function GamePredictions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mlb-backend-k3uj.onrender.com/predict")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Today's Game Predictions</h2>
      {data.map((game, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-700 rounded">
          <p><strong>Game:</strong> {game.matchup}</p>
          <p><strong>Prediction:</strong> {game.predicted_winner} ({game.win_probability}%)</p>
          <p className="text-sm text-gray-300">{game.analysis}</p>
        </div>
      ))}
    </div>
  );
}
