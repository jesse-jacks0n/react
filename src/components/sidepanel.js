import React from "react";

export default function SidePanel({ activeButton, handleButtonClick }) {
  return (
    <div className="side-panel">
      <Logo />
      <AddFile />
      <hr />
      <div className="button-container">
        <button
          className={activeButton === 'dashboard' ? 'active' : ''}
          onClick={() => handleButtonClick('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={activeButton === 'myFiles' ? 'active' : ''}
          onClick={() => handleButtonClick('myFiles')}
        >
          My Files
        </button>
        <button
          className={activeButton === 'settings' ? 'active' : ''}
          onClick={() => handleButtonClick('settings')}
        >
          Settings
        </button>
      </div>
      <hr style={{ borderColor: '#edf4ff', borderWidth: '0.5px' }} />

    </div>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-background">
        <p className="logo">C</p>
      </div>
      <h4 className="logo-name">CLOUDY</h4>
    </div>
  );
}

function AddFile() {
  return (
    <div className="add-file">
      <p>
        Add
        <br /> New File
      </p>
      <div className="file-add-icon">
        <p className="add">+</p>
      </div>
    </div>
  );
}
