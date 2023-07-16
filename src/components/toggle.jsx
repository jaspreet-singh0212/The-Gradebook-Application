import React, { useState } from 'react';
import './toggle.css';

function ToggleButton({ showStatistics, setShowStatistics }) {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
    setShowStatistics(!showStatistics);
  };

  return (
    <div id='dem'>
      <h2>Show Statistics :</h2>
    <div class="checkbox-wrapper-8">
    <input class="tgl tgl-skewed" id="cb3-8" type="checkbox" checked={toggleOn} onChange={handleToggle}/>
    <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb3-8"></label>
  </div></div>
    );
  }


    


export default ToggleButton;
