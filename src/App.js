import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Destination from "./components/Destination/Destination";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Destination/>
      </div>
    </BrowserRouter>
  );
}

export default App;
