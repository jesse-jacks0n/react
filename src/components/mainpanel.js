import React from 'react';
import DashboardContent from './dashboardContent';
import MyFilesContent from './myFilesContent';
import SettingsContent from './settingsContent';

export default function MainPanel({ activeButton }) {
  let content;

  switch (activeButton) {
    case 'dashboard':
      content = <DashboardContent />;
      break;
    case 'myFiles':
      content = <MyFilesContent />;
      break;
    case 'settings':
      content = <SettingsContent />;
      break;
    default:
      content = null;
  }

  return <div className="main-panel">{content}</div>;
}
