import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
