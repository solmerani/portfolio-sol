import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Zwap",
      description:
        "Zwap es una plataforma de intercambio de hogares que permite a los usuarios viajar y hospedarse en casas de otras personas. Fui parte del equipo de desarrollo front-end, trabajando en la estructura de la web y la integración visual del diseño.",
      collaborators: "Maia Michanie, Sol Merani, Tomás Díaz, Benjamín Castro",
    },
    {
      id: 2,
      title: "Maaian Dice Todo",
      description:
        "Proyecto audiovisual inspirado en el formato de streaming, donde me encargué de la programación de la web y la gestión del contenido multimedia.",
      collaborators: "Sol Merani, Julián T., Maia Michanie",
    },
    {
      id: 3,
      title: "Analizador de Mamografías",
      description:
        "Aplicación que utiliza inteligencia artificial para el análisis y detección temprana de anomalías en mamografías. Participé en el desarrollo de la interfaz y la conexión con el modelo de IA.",
      collaborators: "Equipo TIC D 2024",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis proyectos</h2>

      <div className="projects-layout">
        {/* Panel de información */}
        <div className="project-info">
          {selectedProject ? (
            <>
              <h3>{selectedProject.title}</h3>
              <p className="description">{selectedProject.description}</p>
              <p className="collab">
                <strong>Colaborador(es):</strong> {selectedProject.collaborators}
              </p>
            </>
          ) : (
            <>
              <h3>Mis proyectos</h3>
              <p className="description">
                Estos son los proyectos en los que formé parte a lo largo de mi vida — en su mayoría
                grupales — en todos me encargué de participar en el equipo de
                programación y en la integración de los diseños.
              </p>
              <p className="hint">
                Apretá un proyecto para saber más información.
              </p>
            </>
          )}
        </div>

        {/* Grid de tarjetas */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${
                selectedProject?.id === project.id ? "active" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="thumbnail"></div>
              <h4>{project.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
