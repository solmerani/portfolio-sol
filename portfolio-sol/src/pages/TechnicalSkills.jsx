import "./TechnicalSkills.css";

export default function TechnicalSkills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Habilidades técnicas</h2>

      <div className="skills-layout">
        {/* 🔹 Columna izquierda */}
        <div className="skills-left">
          <div className="skills-box">
            <h3>Lenguajes y Tecnologías</h3>
            <div className="tags">
              <span>Python</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skills-box">
            <h3>Desarrollo web</h3>
            <div className="tags">
              <span><b>Frontend:</b> React, HTML, CSS</span>
              <span><b>Backend:</b> Node.js, Express, APIs REST</span>
            </div>
          </div>

          <div className="skills-box">
            <h3>Bases de Datos</h3>
            <div className="tags">
              <span>Diseño y modelado</span>
              <span>Relacionales: MySQL</span>
              <span>No relacionales: MongoDB</span>
            </div>
          </div>
        </div>

        {/* 🔹 Columna derecha */}
        <div className="skills-right">
          <div className="skills-box small">
            <h3>Stack principal</h3>
            <div className="tags">
              <span>React</span>
              <span>Node</span>
              <span>Express</span>
              <span>REST</span>
            </div>
          </div>

          <div className="skills-box small">
            <h3>Foco actual</h3>
            <ul className="progress">
              <li><b>React</b> <div className="bar"><div className="fill" style={{width: "90%"}}></div></div></li>
              <li><b>Node.js</b> <div className="bar"><div className="fill" style={{width: "75%"}}></div></div></li>
              <li><b>APIs</b> <div className="bar"><div className="fill" style={{width: "80%"}}></div></div></li>
            </ul>
          </div>

          <div className="skills-box small">
            <h3>Bases de datos</h3>
            <ul className="progress">
              <li><b>MySQL</b> <div className="bar"><div className="fill" style={{width: "85%"}}></div></div></li>
              <li><b>MongoDB</b> <div className="bar"><div className="fill" style={{width: "70%"}}></div></div></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
