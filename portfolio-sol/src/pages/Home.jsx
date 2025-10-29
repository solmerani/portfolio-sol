import "./Home.css";
import figura from "../assets/figura.png"; // 👈 importás la figura

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="text-side">
        <p className="hello">&lt;¡Hola!&gt;</p>
        <h1>
          Soy <span>Sol Merani</span>
        </h1>
        <h2>Back-end & Front-end</h2>
        <p className="description">
          Desarrolladora con pasión por el código limpio, la arquitectura eficiente y el diseño funcional.
          Me encanta crear soluciones digitales que combinan la lógica del back-end con la estética del front.
        </p>
        <button className="contact-btn">Contáctame →</button>
      </div>

     <div className="shape-side">
  <img src={figura} alt="Figura decorativa" className="shape-img" />
</div>

    </section>
  );
}
