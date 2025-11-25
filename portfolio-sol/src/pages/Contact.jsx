import "./Contact.css";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";

export default function Contact() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="footer-content">

        {/* COLUMNA 1: NOMBRE */}
        <div className="footer-col left">
          <h2>Sol Merani</h2>
        </div>

        {/* COLUMNA 2: VOCACIÓN */}
        <div className="footer-col">
          <h3>Vocación</h3>
          <p>Programadora web</p>
          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
          </ul>
        </div>

        {/* COLUMNA 3: AYUDA */}
        <div className="footer-col">
          <h3>¿Necesitás ayuda?</h3>
          <p>
            Estoy acá para convertir tus ideas en una página web funcional y atractiva.
            Contame sobre tu proyecto y empecemos a construir algo increíble juntos.
          </p>
        </div>

        {/* COLUMNA 4: SEGUIME */}
        <div className="footer-col right">
          <h3>Seguime</h3>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/sol-merani-19b834357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://www.instagram.com/solmeranii?igsh=MWg0dnNoeHczYXZheg%3D%3D&utm_source=qr"
              target="_blank"
            >
              <img src={instagram} alt="Instagram" />
            </a>

            <a href="mailto:solmerani@gmail.com" target="_blank">
              <img src={gmail} alt="Gmail" />
            </a>

            <a href="https://github.com/solmerani" target="_blank">
              <img src={github} alt="Github" />
            </a>
          </div>

          <p>+54 9 11 3104 9072</p>
          <p>solmerani@gmail.com</p>
        </div>

      </div>
    </footer>
  );
}
