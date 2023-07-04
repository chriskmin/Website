import React from 'react'
import {MdNightsStay, MdWbSunny} from 'react-icons/md'

const Header = () => {
  return (
  <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-xl">Chris Min</h1>

      <div>
        <MdNightsStay className="text-2xl cursor-pointer"/>
        <MdWbSunny className="text-2xl cursor-pointer"/>
      </div>

    </nav>

  </header>
  );
};

export default Header;
