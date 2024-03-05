import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import HistoryPage from "./components/pages/HistoryPage";
import BirthdaysPage from "./components/pages/BirthdaysPage";
import TouristPointsPage from "./components/pages/TouristPointsPage";
import PhotosPage from "./components/pages/PhotosPage";
import AccommodationPage from "./components/pages/AccommodationPage";
import GastronomyPage from "./components/pages/GastronomyPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="nav-container">
      <nav>
        <Link to="/" className="nav-link">
          Home |
        </Link>
        <Link to="/history" className="nav-link">

        </Link>
        <Link to="/birthdays" className="nav-link">
          Aniversariantes |
        </Link>
        <Link to="/tourist-points" className="nav-link">
         
        </Link>
        <Link to="/photos" className="nav-link">
          Fotos |
        </Link>
        <Link to="/accommodation" className="nav-link">
          Hospedagem |
        </Link>
        <Link to="/gastronomy" className="nav-link">
          Gastronomia |
        </Link>
        <Link to="/register" className="nav-link">
          Cadastro 
        </Link> 
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/birthdays" element={<BirthdaysPage />} />
        <Route path="/tourist-points" element={<TouristPointsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/gastronomy" element={<GastronomyPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
