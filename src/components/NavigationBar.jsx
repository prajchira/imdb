import React from 'react';
import Logo from '../logo.png';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavigationBar() {
  return (
    <div className="align-center border-double flex items-center space-x-10 py-1">
      <img src={Logo} width={100} height={100} alt="" />

      {/* Use Link components to create the navigation links */}
      <Link to="/" className="font-bold text-xl text-cyan-700">
        Trending
      </Link>

      <Link to="/find" className="font-bold text-xl text-cyan-700">
        Find
      </Link>
    </div>
  );
}

export default NavigationBar;

