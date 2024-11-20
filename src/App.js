import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Destination from "./components/Destination/Destination";
import Activity from "./components/Activity/Activity";
import Tour from "./components/Tour/Tour";
import Photos from "./components/Photos/Photos";
import Reviews from "./components/Reviews/Reviews";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Destination />
        <Activity />
        <Tour />
        <Photos />
        <Reviews />
        <Newsletter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
