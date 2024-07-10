// src/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#EFF3F6] text-black     px-4 py-2 hidden lg:block">
      <button className="text-md w-full font-bold mb-12 btn bg-[#2042B6] hover:bg-[#2042B6] text-white ">The Index</button>
      <ul className='space-y-8'>
<li className="mb-2 flex justify-between"><Link className="text-gray-500">The Index Tab One</Link><Link>+</Link></li>
<li className="mb-2 flex justify-between"><Link className="text-gray-500">The Index Tab Two</Link><Link>+</Link></li>
<li className="mb-2 flex justify-between"><Link className="text-gray-500">The Index Tab Three</Link><Link>+</Link></li>
<li className="mb-2 flex justify-between"><Link className="text-gray-500">The Index Tab Four</Link><Link  >+</Link  ></li>
<li className="mb-2 flex justify-between"><Link className="text-gray-500">The Index Tab Five</Link><Link  >+</Link  ></li>
      </ul>
    </div>
  );
};

export default Sidebar;
