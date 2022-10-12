import React, { useState, useEffect } from 'react';
import Manager from './Components/Manager/Manager';
import ManagerList from './Components/ManagerList/ManagerList';
import './App.css';

function App() {
  const [update, setUpdate] = useState(false)

  function handleMouseDown() {
    setUpdate(true);
    console.log(update)
  }

  function handleMouseUp() {
    setUpdate(false);
    console.log(update)
  }

  const [cash, setCash] = useState(99);
  const [multiplier, setMultiplier] = useState(1);

  function addCashOnUpgrade() {
    setCash(prevCash => {
      return prevCash + 1 * multiplier;
    })
  }

  const [multiplierCost, setMultiplierCost] = useState(100);
  function handleMultiplierUpgradeClick() {
    setCash(prevCash => {
      return prevCash - multiplierCost;
    })
    setMultiplierCost(prevCost => {
      return prevCost * 2;
    })
    setMultiplier(prevMultiplier => {
      return prevMultiplier * 2;
    })
  }

  function multiplierDisabler() {
    if(cash >= multiplierCost) {
      return false;
    } else {
      return true;
    }
  }

  function togglePicture() {
    if(update === true) {
        return <img src={require("./Media/basic_char_upgrade.png")} height="200px" width="75px" />
    } else {
        return <img src={require("./Media/basic_char.png")} height="200px" width="75px" />
    }
}

  return (
    <div className="App">
      <p>${cash}</p>
      <div>{togglePicture()}</div>
      <button onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onClick={() => addCashOnUpgrade()}>Click!</button><br/>
      <button onClick={handleMultiplierUpgradeClick} disabled={multiplierDisabler()}>
        Upgrade Multiplier: x{multiplier + 1} for ${multiplierCost}
      </button><br/>
      <Manager addCashOnUpgrade={addCashOnUpgrade}/>
      <ManagerList />
    </div>
  );
}

export default App;
