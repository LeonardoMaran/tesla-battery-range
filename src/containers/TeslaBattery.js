import React, { useState, useEffect } from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaStats from '../components/TeslaStats/TeslaStats'; 
import TeslaCounter from '../components/TeslaCounter/TeslaCounter'; 
import { getModelData } from '../services/BatteryService';

const TeslaBattery = (props) => {

  const [carstats, setCarsStats] = useState([]);
  const [config, setConfig] = useState({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  })

  const calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
  }

  const statsUpdate = () => {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    setCarsStats(calculateStats(carModels, config))  
  }

  useEffect(() => {
    statsUpdate();
  }, [])

  const updateCounterState = (title, newValue) => {
    const config = { ...config };
    // update config state with new value
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
    // update our state
    setConfig({ config });
  }

  const increment = (e, title) => {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      updateCounterState(title, newValue);
    }
  }
  
  const decrement = (e, title) => {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = props.counterDefaultVal;
    if (title === 'Speed') {
      currentValue = config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      updateCounterState(title, newValue);
    }
  }  

    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={config.wheels} />
        <TeslaStats carstats={carstats} />
        <div className="tesla-controls cf">

        <TeslaCounter 
          currentValue={config.speed}
          initValues={props.counterDefaultVal.speed}
          increment={increment}
          decrement={decrement}
        />
        
        <div className="tesla-climate-container cf">

        <TeslaCounter 
          currentValue={config.temperature}
          initValues={props.counterDefaultVal.temperature}
          increment={increment}
          decrement={decrement}
        />
        </div>
        </div>
        <TeslaNotice />
      </form>
    )
}

export default TeslaBattery;