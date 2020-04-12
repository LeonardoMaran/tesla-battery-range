import React, { useState } from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats';

const TeslaBattery = () => {

  const [carstats, setCarsStats] = useState([]);
  const [config, setConfig] = useState({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  })

    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={config.wheels} />
        <TeslaStats carstats={carstats} />
        <TeslaNotice />
      </form>
    )
}

export default TeslaBattery;