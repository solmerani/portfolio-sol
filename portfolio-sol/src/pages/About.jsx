import "./About.css";
import figura from "../assets/figura1.png"; // o tu figura irregular decorativa

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Sobre mí</h2>

      <div className="about-container">
        {/* Figura decorativa */}
        <div className="about-shape">
          <img src={figura} alt="Decoración" />
        </div>

        {/* Texto principal */}
        <div className="about-text">
          <h3>About me – <span>Sol Merani</span></h3>
          <p>
            Soy desarrolladora con pasión por crear experiencias digitales que combinan
            funcionalidad y estética. Me gusta trabajar en equipo, aprender nuevas tecnologías
            y participar en proyectos donde la creatividad y la lógica se encuentran.
            <br /><br />
            A lo largo de mi formación participé en distintos proyectos grupales donde
            me encargué principalmente del desarrollo front-end, la conexión entre el diseño y
            la lógica, y la presentación visual de los productos.
          </p>
        </div>
      </div>
    </section>
  );
}
