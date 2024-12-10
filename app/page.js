"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => {
        if(!response.ok) {
          throw new Error(`HTTP error! response code: ${response.status}`);
        }
        console.log(response.json);
        return response.json();
      })
      .then((data) => {
        console.log('Parsed JSON:', data); // Parsed JSON data

        setData(data);
      })
      .catch((error) => {
        console.error('Issue fetching JSON:', error)
      });

  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.page}>
      <ul className={styles.projectList}>
        {data.map((project, index) => (
          <li key={index} className={styles.projectCard}>
              <img
                      src={`/${project.image}`}
                      alt=""
                      className={styles.projectImage}
              />
              <small>{project.caption}</small>
              <p>{project.location}</p>
              <ul>
                  {project.tags.map((tag) => (
                  <li>
                    <a href={tag.link} target="_blank" rel="noopener noreferrer">
                      {tag.name}
                    </a>
                  </li>
                  ))}
              </ul>
              <h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.heading}</a>
              </h2>
              <p>{project.description}</p>
          </li>
        ))}
    </ul>

      <main className={styles.main}>

        <a
          href="https://adhocracy.plus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </main>
    </div>
  );
}
