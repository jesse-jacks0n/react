import React from 'react';
import DashboardContent from '../components/dashboardContent';
import MyFilesContent from '../components/myFilesContent';
import SettingsContent from '../components/settingsContent';

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
