// src/TopCards.js

import React from 'react';

const TopCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold">WPPOOL Index</h3>
        <p className="text-2xl text-red-600">+66.2%</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold">Google Index</h3>
        <p className="text-2xl text-green-600">+26.6%</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold">Microsoft</h3>
        <p className="text-2xl text-green-600">+34.1%</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold">Twitter Index</h3>
        <p className="text-2xl text-purple-600">+17%</p>
      </div>
    </div>
  );
};

export default TopCards;
