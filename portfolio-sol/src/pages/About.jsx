import "./About.css";
import figura from "../assets/figura1.png";

import ort from "../assets/ort.png";
import itba from "../assets/itba.png";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Sobre mi</h2>

      <div className="about-container">
        
        {/* FIGURA DECORATIVA */}
        <div className="about-shape">
          <img src={figura} alt="decoración" />
        </div>

        {/* TEXTOS A LA DERECHA */}
        <div className="about-right">
          <h3 className="about-title">About me - <span>Sol Merani</span></h3>

          {/* CUADRO 1 */}
          <div className="about-box">
            <h4>Nivel de inglés</h4>
            <p>Nivel B-2: Intermedio alto (Upper Intermediate)</p>
          </div>

          {/* CUADRO 2 */}
          <div className="about-box logos-box">
            <div>
              <h4>Formación</h4>
              <p>
                Colegio secundario ORT orientación TIC, actualmente estudiante en ITBA
                de Ingeniería Industrial
              </p>
            </div>

            <div className="logos">
              <img src={ort} alt="ORT" />
              <img src={itba} alt="ITBA" />
            </div>
          </div>

          {/* CUADRO 3 */}
          <div className="about-box">
            <h4>Trabajo en equipo</h4>
            <p>
              Tengo experiencia trabajando en equipo y contribuyendo a proyectos
              grupales de forma efectiva.
            </p>
          </div>

          {/* CUADRO 4 */}
          <div className="about-box">
            <h4>Características personales</h4>
            <p>
              Me adapto con facilidad, soy práctica para resolver situaciones y me desempeño
              bien en distintos entornos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
