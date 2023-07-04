import React from 'react'
import {MdNightsStay, MdWbSunny} from 'react-icons/md'

const Header = () => {
  return (
  <header>
    <nav>
      <h1> Chris Min</h1>

      <div>
        <MdNightsStay />
        <MdWbSunny />
      </div>

    </nav>

  </header>
  );
};

export default Header;
