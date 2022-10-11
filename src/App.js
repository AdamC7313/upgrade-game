import React, { useState, useEffect } from 'react';
import Character from './Components/Character/Character';
import Upgrade from './Components/Upgrade/Upgrade';
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

  function togglePicture() {
    if(update === true) {
        return <img src={require("./Media/basic_char_upgrade.png")} height="200px" width="75px" />
    } else {
        return <img src={require("./Media/basic_char.png")} height="200px" width="75px" />
    }
}

  return (
    <div className="App">
      {togglePicture()}
      <button onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>Upgrade</button>
    </div>
  );
}

export default App;
