"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ProjectList from "./components/projects/ProjectList";
import ToggleView from "./components/ui/ToggleView";

export default function Home() {

	const [data, setData] = useState(null);
	const [view, setView] = useState("grid"); // layout view, default to horizontal

	const handleViewToggle = (newView) => {
		setView(newView);
	};

	useEffect(() => {
		fetch('./data.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! response code: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error('Issue fetching JSON:', error)
			});

	}, []);

	if (!data) return <div>Loading...</div>;

	return (
		<div className={styles.page}>
			<ToggleView view={view} onToggle={handleViewToggle} />
			<main className={styles.main}>
				<ProjectList view={view} projects={data} />
			</main>
		</div>
	);
}
