// src/Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#EFF3F6] text-black     p-2 hidden lg:block">
      <h2 className="text-xl font-bold mb-4">The Index</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-gray-500">The Index Tab One</a></li>
        <li className="mb-2"><a href="#" className="text-gray-500">The Index Tab Two</a></li>
        <li className="mb-2"><a href="#" className="text-gray-500">The Index Tab Three</a></li>
        <li className="mb-2"><a href="#" className="text-gray-500">The Index Tab Four</a></li>
        <li className="mb-2"><a href="#" className="text-gray-500">The Index Tab Five</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
