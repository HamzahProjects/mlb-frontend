import React from 'react';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-white text-black' : 'bg-gray-800'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
