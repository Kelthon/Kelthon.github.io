import { projects } from '@services/data';
import './MyProjects.css';
import { RiExternalLinkFill } from '@remixicon/react';

function MyProjects() {
  const projectList = projects.map((project, index) => {
    return (
      <li className="pl-project-item" key={project.id}>
        <p className="pl-pi-counter">
          <span>{index + 1}</span>
          <span>.</span>
        </p>
        <a className="pl-pi-link" href={project.url}>
          <h3 className="pl-pi-lnk-title">
            <span>{project.title}</span>
            <span>
              <RiExternalLinkFill />
            </span>
          </h3>
          <small className="pl-pi-lnk-description">{project.description}</small>
        </a>
        <span>
          <RiExternalLinkFill />
        </span>
      </li>
    );
  });

  return (
    <section id="my-projects">
      <ol className="project-list">{projectList}</ol>
    </section>
  );
}

export default MyProjects;
