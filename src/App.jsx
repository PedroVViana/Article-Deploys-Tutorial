import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DeployGuide from "./pages/DeployGuide";
import DeployGuideReact from "./pages/DeployGuideReact";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<DeployGuideReact />} />
          <Route path="/vite" element={<DeployGuide />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
