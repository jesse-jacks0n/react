import "./App.css";
import ActivityPanel from "./components/activitypanel";
import MainPanel from "./components/mainpanel";
import SidePanel from "./components/sidepanel";

function App() {
  return (
    <div className="container">
      <SidePanel />
      <MainPanel />
      <ActivityPanel />
    </div>
  );
}

export default App;
