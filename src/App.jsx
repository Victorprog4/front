import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NovaSimulacao from "./components/NovaSimulacao";

import "./app.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simular-colheita" element={<NovaSimulacao />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
