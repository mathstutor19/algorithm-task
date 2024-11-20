import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Destination from "./components/Destination/Destination";
import Activity from "./components/Activity/Activity";
import Tour from "./components/Tour/Tour";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Destination />
        <Activity />
        <Tour />
      </div>
    </BrowserRouter>
  );
}

export default App;
