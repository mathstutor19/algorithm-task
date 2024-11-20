import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Destination from "./components/Destination/Destination";
import Activity from "./components/Activity/Activity";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Destination/>
        <Activity/>
      </div>
    </BrowserRouter>
  );
}

export default App;
