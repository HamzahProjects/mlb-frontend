import React from 'react';
import { Tabs } from './components/Tabs';
import GamePredictions from './components/GamePredictions';
import YardWatch from './components/YardWatch';
import PitcherStrikes from './components/PitcherStrikes';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('Game Predictions');

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <Tabs tabs={['Game Predictions', 'Yard Watch', 'Pitcher Strikes']} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'Game Predictions' && <GamePredictions />}
      {activeTab === 'Yard Watch' && <YardWatch />}
      {activeTab === 'Pitcher Strikes' && <PitcherStrikes />}
    </div>
  );
}
