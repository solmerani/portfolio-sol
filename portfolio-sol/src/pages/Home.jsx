import "./Home.css";


export default function Home() {
  return (
    <section id="home" className="home">
  <div className="text-wrapper">   {/* ← NUEVO CONTENEDOR */}
    <p className="hello">&lt;¡Hola!&gt;</p>

    <h1>Soy <span>Sol Merani</span></h1>

    <h2>Back-end & Front-end</h2>

    <p className="description">
      Me interesa todo lo que sea crear, mejorar y aprender. Trabajo con back-end y front-end, y me gusta encontrar soluciones simples a problemas reales. Soy independiente, práctica y me gusta trabajar en equipo.
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
