// src/pages/HomePage.js
import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; // Importe o Carousel do react-bootstrap
import "../styles/HomePage.css";
import culturalImage from "../photos/camisao1.jpg";
import secondImage from "../photos/camisao2.jpg";
import thirdImage from '../photos/camisao3.jpg';

function HomePage() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container mt-5">
      <header className="bg-light">
        <h1 className="display-4">Bem-vindo ao Distrito de Camisão</h1>
      </header>
      <p className="lead">
        Descubra a beleza e a riqueza cultural da nossa comunidade.
      </p>

      {/* Carrossel de imagens */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            src={culturalImage}
            className="d-block w-100"
            alt="Cultura de Camisão"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondImage}
            alt="Segunda imagem cultural"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdImage}
            alt="Terceira imagem cultural"
          />
        </Carousel.Item>
      </Carousel>

      <div className="my-5">
        {/* Seção de recursos ou outros conteúdos */}
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div
              onClick={() => handleSectionClick("history")}
              className={`custom-feature p-3 rounded shadow-sm h-100 ${
                activeSection === "history" ? "active-feature" : ""
              }`}
            >
              <h2 className="h5">História</h2>
              <p>Conheça a história rica e vibrante do nosso distrito.</p>
            </div>
          </div>

          <div className="col-md-4" link="/history">
            <div
              onClick={() => handleSectionClick("events")}
              className={`custom-feature p-3 rounded shadow-sm h-100 ${
                activeSection === "events" ? "active-feature" : ""
              }`}
            >
              <h2 className="h5">Mural de Recados</h2>
              <p>
                Participe dos nossos eventos culturais anuais e celebrações.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              onClick={() => handleSectionClick("tourism")}
              className={`custom-feature p-3 rounded shadow-sm h-100 ${
                activeSection === "tourism" ? "active-feature" : ""
              }`}
            >
              <h2 className="h5">Turismo</h2>
              <p>Descubra os pontos turísticos e atrações imperdíveis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
