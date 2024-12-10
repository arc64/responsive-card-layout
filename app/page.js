"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ProjectList from "./components/projects/ProjectList";

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
      <ProjectList projects={data} />
    </div>
  );
}
