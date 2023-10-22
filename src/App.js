import React, { useState } from 'react';
import "./App.css";
import ActivityPanel from "./layout/activitypanel";
import MainPanel from "./layout/mainpanel";
import SidePanel from "./layout/sidepanel";

function App() {
  const [activeButton, setActiveButton] = useState('dashboard');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container">
      <SidePanel
        activeButton={activeButton}
        handleButtonClick={handleButtonClick}
      />
      <MainPanel activeButton={activeButton} />
      <ActivityPanel />
    </div>
  );
}

export default App;
