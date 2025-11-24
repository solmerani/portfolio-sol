import "./TechnicalSkills.css";

import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import fastapiIcon from "../assets/fastapi.png";
import mysqlIcon from "../assets/mysql.png";
import mongoIcon from "../assets/mongo.png";

export default function TechnicalSkills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Habilidades técnicas</h2>

      <div className="skills-layout">
        
        {/* ============================
                COLUMNA IZQUIERDA
            ============================ */}
        <div className="skills-left-box">

          <div className="block-title">Lenguajes y Tecnologías</div>
          <div className="tags">
            <span>Python</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SQL</span>
          </div>

          <hr />

          <div className="block-title">Desarrollo web</div>
          <div className="tags vertical">
            <span><b>Frontend:</b> React, HTML, CSS</span>
            <span><b>Backend:</b> Node.js, Express, APIs REST</span>
          </div>

          <hr />

          <div className="block-title">Bases de Datos</div>
          <div className="tags">
            <span>Diseño y modelado</span>
            <span>Relacionales: MySQL</span>
            <span>No relacionales: MongoDB</span>
          </div>

        </div>

        {/* ============================
                COLUMNA DERECHA
            ============================ */}
        <div className="skills-right">

          {/* Caja 1 */}
          <div className="skills-box">
            <h3>Stack principal</h3>
            <div className="tags">
              <span>React</span>
              <span>Node</span>
              <span>Express</span>
              <span>REST</span>
            </div>
          </div>

          {/* Caja 2 */}
          <div className="skills-box">
            <h3>Foco actual</h3>
            <ul className="focus-list">
              <li>
                <img src={reactIcon} alt="react" />
                <div className="bar"><div className="fill" style={{ width: "90%" }}></div></div>
              </li>

              <li>
                <img src={nodeIcon} alt="node" />
                <div className="bar"><div className="fill" style={{ width: "75%" }}></div></div>
              </li>

              <li>
                <img src={fastapiIcon} alt="fastapi" />
                <div className="bar"><div className="fill" style={{ width: "80%" }}></div></div>
              </li>
            </ul>
          </div>

          {/* Caja 3 */}
          <div className="skills-box">
            <h3>Bases de datos</h3>
            <ul className="focus-list">
              <li>
                <img src={mysqlIcon} alt="mysql" />
                <div className="bar"><div className="fill" style={{ width: "85%" }}></div></div>
              </li>

              <li>
                <img src={mongoIcon} alt="mongo" />
                <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
