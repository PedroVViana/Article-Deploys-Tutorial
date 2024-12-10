import React, { useState } from "react";
import Footer from "./components/Footer";
import DeployGuide from "./pages/DeployGuide";
import DeployGuideReact from "./pages/DeployGuideReact";
import Navbar from "./components/Navbar";  // Crie o componente Navbar
import "./styles/global.css";

const App = () => {
  // Estado para alternar entre DeployGuide e DeployGuideReact
  const [currentComponent, setCurrentComponent] = useState("react");

  // Função para alternar o estado
  const handleNavigation = (component) => {
    setCurrentComponent(component);
  };

  return (
    <section>
      <Navbar onNavigate={handleNavigation} /> {/* Passa a função para o Navbar */}
      
      {/* Renderiza o componente com base no estado */}
      {currentComponent === "react" ? <DeployGuideReact /> : <DeployGuide />}

      <Footer />
    </section>
  );
};

export default App;
