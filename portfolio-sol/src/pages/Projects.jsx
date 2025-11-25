import { useState } from "react";
import "./Projects.css";

import etiketa1 from "../assets/logo2.png";
import etiketa2 from "../assets/etiketa4.png";
import etiketa3 from "../assets/pantalla1.png";
import etiketa4 from "../assets/pantalla2.png";

import scanma1 from "../assets/scanma1.png";
import scanma2 from "../assets/scanma2.png";
import scanma3 from "../assets/scanma3.png";

import easy2 from "../assets/easy2.png";

function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="thumbnail-carousel">
      <img src={images[index]} alt="" />

      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={(e) => { e.stopPropagation(); setIndex((index === 0 ? images.length - 1 : index - 1)); }}>
            ‹
          </button>

          <button className="carousel-btn next" onClick={(e) => { e.stopPropagation(); setIndex((index === images.length - 1 ? 0 : index + 1)); }}>
            ›
          </button>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Etiketa",
      short: "Detector de disruptores endocrinos en productos cosméticos.",
      description:
        "Etiketa es una aplicación móvil que permite escanear productos cosméticos y de higiene para identificar la presencia de disruptores endocrinos. Ofrece una calificación de salud, análisis de ingredientes, y recomendaciones de alternativas más seguras según los intereses del usuario. El objetivo del proyecto es promover un consumo consciente y ayudar a las personas a tomar decisiones informadas sobre los productos que utilizan.",
      collaborators: "Sol Merani,Sebastian Huberman, Lucila Dayan, Sophie Sued.",
      images: [etiketa1, etiketa2, etiketa3,etiketa4],
    },
    {
      id: 2,
      title: "Scanma",
      short: "Analizador de mamografías con inteligencia artificial.",
      description:
        "Scanma es un sistema de análisis automático de mamografías diseñado para asistir a profesionales de la salud en la detección temprana de cáncer de mama. Utiliza modelos de inteligencia artificial para identificar patrones y posibles anomalías en las imágenes, ofreciendo una segunda opinión rápida y confiable. El proyecto busca mejorar el soporte diagnóstico y contribuir a una detección más precisa y eficiente.",
      collaborators: "Sol Merani,Sebastian Huberman, Maia Michanie, Lola Gouget.",
       images: [scanma1, scanma2, scanma3],
    },
    {
      id: 3,
      title: "Easy Tech",
      short: "App de escritorio para enseñar tecnología a adultos mayores.",
      description:
        "Easy Tech es una aplicación de escritorio diseñada para ayudar a las personas mayores a familiarizarse con el uso del celular y las redes sociales. Incluye tests de opción múltiple, juegos interactivos y simuladores que enseñan de forma simple y práctica cómo utilizar aplicaciones como WhatsApp e Instagram, así como funciones básicas del dispositivo. El objetivo es reducir la brecha digital y brindar autonomía tecnológica a los adultos mayores.",
      collaborators: "Sol Merani,Laila Dejtiar, Lucila Dayan,Jamin Niewadonsky.",
      images: [easy2],
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis proyectos</h2>

      <div className="projects-layout">

        {/* PANEL IZQUIERDO */}
        <div className="project-info">
          {selectedProject ? (
            <>
              <h3>{selectedProject.title}</h3>
              <p className="description">{selectedProject.description}</p>
              <p className="collab">
                <strong>Colaborador(es):</strong> {selectedProject.collaborators}
              </p>
            </>
          ) : (
            <>
              <h3>Mis proyectos</h3>
              <p className="description">
                Estos son los proyectos en los que trabajé a lo largo de mi vida — en su mayoría grupales — donde participé en desarrollo, lógica, estructura y la integración de los diseños.
              </p>
              <p className="hint">Apretá un proyecto para saber más información.</p>
            </>
          )}
        </div>

         {/* Grid de tarjetas */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${
                selectedProject?.id === project.id ? "active" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCarousel images={project.images} />

              <h4>{project.title}</h4>
              <p className="short">{project.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
