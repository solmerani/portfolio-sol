import "./Home.css";


export default function Home() {
  return (
    <section id="home" className="home">
  <div className="text-wrapper">   {/* ← NUEVO CONTENEDOR */}
    <p className="hello">&lt;¡Hola!&gt;</p>

    <h1>Soy <span>Sol Merani</span></h1>

    <h2>Back-end & Front-end</h2>

    <p className="description">
      Desarrolladora con pasión por el código limpio, la arquitectura eficiente y 
      el diseño funcional. Me encanta crear soluciones digitales que combinan 
      la lógica del back-end con la estética del front.
    </p>

    <button
      className="contact-btn"
      onClick={() => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Contáctame
    </button>
  </div>
</section>

  );
}
