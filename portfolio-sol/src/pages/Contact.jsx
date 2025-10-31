import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="footer-content">
        {/* COLUMNA 1 */}
        <div className="footer-col left">
          <h2>Sol Merani</h2>
        </div>

        {/* COLUMNA 2 */}
        <div className="footer-col">
          <h3>Vocación</h3>
          <p>Programadora web</p>
          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div className="footer-col">
          <h3>¿Necesitás ayuda?</h3>
          <p>
            Estoy aquí para convertir tus ideas en una página web funcional y
            atractiva. Cuéntame sobre tu proyecto y empecemos a construir algo
            increíble juntos.
          </p>
        </div>

        {/* COLUMNA 4 */}
        <div className="footer-col right">
          <h3>Seguime</h3>
          <p>
            Linkedin: <a href="#">@SolMerani</a>
          </p>
          <p>
            Gmail:{" "}
            <a href="mailto:solmerani07@gmail.com">solmerani07@gmail.com</a>
          </p>
          <p>Teléfono: +54 911 3104 9062</p>
          <p>
            Instagram: <a href="#">@Sol.Merani</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
