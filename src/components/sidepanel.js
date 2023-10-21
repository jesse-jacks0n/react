import React from "react";

export default function SidePanel({ activeButton, handleButtonClick }) {
  return (
    <div className="side-panel">
      <Logo />
      <AddFile />
      <Devider />
      <div className="button-container">
        <button
          className={activeButton === "dashboard" ? "active" : ""}
          onClick={() => handleButtonClick("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={activeButton === "myFiles" ? "active" : ""}
          onClick={() => handleButtonClick("myFiles")}
        >
          My Files
        </button>
        <button
          className={activeButton === "settings" ? "active" : ""}
          onClick={() => handleButtonClick("settings")}
        >
          Settings
        </button>
      </div>

      <Devider />
      <FileStorage />
      <UpgradeContainer />
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

function FileStorage() {
  return (
    <div className="storage-analytics">
      <p>
        <span>25.32 GB</span> used
      </p>
      <p>79% used - 6.64 GB free</p>
      <div className="storage-progress">
        <div className="storage-progress-value"></div>
      </div>
    </div>
  );
}
function Devider() {
  return <div className="devider"></div>;
}
function UpgradeContainer() {
  return (
    <div className="upgrade-container">
     <img className="folder-image" src="/images/folder.png" alt="Folder" />
     <p>
        <span>Upgrade to</span> pro <br/> <span>for unlimmited storage</span>
      </p>
      <button className="premium-button">Go Premium</button>
    </div>
  );
}
