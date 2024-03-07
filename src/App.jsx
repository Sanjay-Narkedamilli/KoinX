import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Cryptotaxes from "./components/pages/Cryptotaxes";
import Freetools from "./components/pages/Freetools";
import Resourcecenter from "./components/pages/Resourcecenter";
import Signup from "./components/pages/Signup";
import Getstarted from "./components/Cyptocurrencies/Getstarted"
// import TrendingCoins from "./components/Cyptocurrencies/Trendingcoins";
import Coins from "./components/Cyptocurrencies/Coins.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cryptocurrencies/:id" element={<Coins />} />
        <Route path="/cryptotaxes" element={<Cryptotaxes />} />
        <Route path="/freetools" element={<Freetools />} />
        <Route path="/resourcecenter" element={<Resourcecenter />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
