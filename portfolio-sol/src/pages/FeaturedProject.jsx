import { useState } from "react";
import "./FeaturedProject.css";

// 👉 Importá acá todas las imágenes del carrusel
import img1 from "../assets/fig1.jpg";
import img2 from "../assets/fig2.jpg";


export default function FeaturedProject() {
  const images = [img1, img2];
  const [index, setIndex] = useState(0);

  const project = {
    title: "Etiketa",
    description:
      "Etiketa fue uno de los proyectos que más me hizo crecer, tanto a nivel técnico como personal. Con mi equipo tuvimos la oportunidad de presentarlo en múltiples eventos importantes, como TIC Experience, la Feria de Proyectos de la ORT y MVP Experience, donde expusimos la idea frente a figuras reconocidas de empresas, inversores y startups. Incluso tuvimos la experiencia de presentarlo en inglés a delegaciones internacionales, lo que nos permitió demostrar el valor del proyecto a un público muy diverso.La idea generó mucha repercusión y recibió una excelente respuesta por parte de la gente. Etiketa me permitió desarrollar habilidades fundamentales, como cómo comunicar un proyecto, cómo presentarlo de manera clara y atractiva, y cómo interactuar con el público de forma profesional. En lo técnico, me encargué del backend completo, desde la arquitectura del servidor y el diseño de rutas hasta la lógica de negocio y la conexión con la base de datos.Este proyecto consolidó mi confianza para exponer, trabajar en equipo y defender una idea frente a personas del ámbito tecnológico y empresarial, convirtiéndose en una de las experiencias más formadoras de mi recorrido.",
    collaborators:
      "Sebastian Huberman (Ux/Ui), Sol Merani (Backend), Sophie Sued (Front-end), Lucila Dayan (algoritmo)",
    tags: ["React", "UI/UX", "Diseño colaborativo", "Frontend"],
  };

  const nextImg = () => setIndex((index + 1) % images.length);
  const prevImg = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <section id="featured" className="featured">
      <h2 className="section-title">Proyecto destacado</h2>

      <div className="featured-container">
        {/* CARRUSEL */}
        <div className="carousel">
          <button className="arrow left" onClick={prevImg}>❮</button>

          <img
            src={images[index]}
            alt="carousel"
            className="carousel-img"
          />

          <button className="arrow right" onClick={nextImg}>❯</button>
        </div>

        {/* INFO */}
        <div className="featured-info">
          <h3>{project.title}</h3>
          <p className="description">{project.description}</p>

          <p className="collab">
            <strong>Colaborador(es):</strong> {project.collaborators}
          </p>

          <div className="tags">
            {project.tags.map((tag, i) => (
              <span className="tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
