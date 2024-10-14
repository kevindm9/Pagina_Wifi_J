import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importamos los componentes creados
import NavBar from "./layouts/Navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Componente de navegación */}
        {/* Secciones de la página */}
        <div id="home" style={{ height: "200vh", padding: "20px" }}>
          <Home />
        </div>
        <div id="about" style={{ height: "250vh", padding: "20px" }}>
          <About />
        </div>
        
        <Footer /> {/* Footer que se muestra en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
