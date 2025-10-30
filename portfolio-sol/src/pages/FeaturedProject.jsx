import "./FeaturedProject.css";
import figura from "../assets/figura.png"; // reemplazá por una imagen del proyecto

export default function FeaturedProject() {
  const project = {
    title: "Zwap",
    description:
      "Zwap es una plataforma de intercambio de hogares que permite a los usuarios viajar y hospedarse en casas de otras personas. Fui parte del equipo de desarrollo front-end, trabajando en la estructura de la web y la integración visual del diseño.",
    collaborators: "Maia Michanie, Sol Merani, Tomás Díaz, Benjamín Castro",
    tags: ["React", "UI/UX", "Diseño colaborativo", "Frontend"],
    image: figura,
  };

  return (
    <section id="featured" className="featured">
      <h2 className="section-title">Proyecto destacado</h2>

      <div className="featured-container">
        {/* Imagen grande */}
        <div className="featured-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Información del proyecto */}
        <div className="featured-info">
          <h3>{project.title}</h3>
          <p className="description">{project.description}</p>
          <p className="collab">
            <strong>Colaborador(es):</strong> {project.collaborators}
          </p>

          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
