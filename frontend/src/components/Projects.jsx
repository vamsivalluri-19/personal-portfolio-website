import React, { useEffect, useState } from "react";
import API from "../services/api";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project._id}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tech:</strong>{" "}
              {project.technologies?.join(", ")}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;