
import React, { useEffect, useState } from 'react';

export default function PitcherStrikes() {
  const [pitchers, setPitchers] = useState([]);

  useEffect(() => {
    fetch('https://mlb-backend-k3uj.onrender.com/predictions/strikeouts')
      .then(res => res.json())
      .then(setPitchers);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pitcher Strikes</h2>
      <p className="mb-4 text-sm text-gray-300">
        Find pitchers whose strikeout lines offer the best betting value based on recent trends, matchups, and sportsbook odds.
      </p>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-600">
            <th className="py-2">Pitcher</th>
            <th className="py-2">Strikeout Pick</th>
            <th className="py-2">Line (Odds)</th>
            <th className="py-2">Strikeout Avg</th>
            <th className="py-2">Recent Stats</th>
          </tr>
        </thead>
        <tbody>
          {pitchers.map((p, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="py-2">{p.name}</td>
              <td className="py-2">{p.pick}</td>
              <td className="py-2">{p.line}</td>
              <td className="py-2">{p.average}</td>
              <td className="py-2">{p.recent_stats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
