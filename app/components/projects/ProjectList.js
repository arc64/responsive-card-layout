// ProjectList.js
import React from "react";
import styles from "./ProjectList.module.css";
import Image from "next/image";

export default function ProjectList({ projects }) {
  return (
    <ul className={styles.projectList}>
      {projects.map((project, index) => (
        <li key={index} className={styles.projectCard}>
          <div className={styles.image}>
            <img
              src={`/${project.image}`}
              alt=""
              className={styles.projectImage}
            />
            <small>{project.caption}</small>
          </div>
          <div className={styles.text}>
            <p>{project.location}</p>
            <ul>
              {project.tags.map((tag, tagIndex) => (
                <li key={tagIndex}>
                  <a href={tag.link} target="_blank" rel="noopener noreferrer">
                    {tag.name}
                  </a>
                </li>
              ))}
            </ul>
            <h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.heading}
              </a>
            </h2>
            <p>{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
