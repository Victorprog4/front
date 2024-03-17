import { Routes, Route } from "react-router-dom"; // Use Routes and Route in v6
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
