import React from "react";
import { GoClock } from "react-icons/go";
import styles from "./ProjectList.module.css";

export default function ProjectList({ view, projects }) {
	return (
		<ul className={`${styles.list} ${view === "grid" ? styles.gridView : styles.listView}`}>
			{projects.map((project, index) => (
				<li key={index} className={styles.card}>
					<div className={styles.image}>
						<img
							src={`/${project.image}`}
							alt="" /* No alt text here as the heading is the primary description */
							className={styles.image}
						/>
						<small className={styles.caption}>{project.caption}</small>
					</div>
					<div className={styles.text}>
						<p className={styles.location}>{project.location}</p>
						<ul className={styles.tags}>
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
					<div className={styles.progress}>
						<progress
							role="progressbar"
							id="progress"
							tabIndex="0"
							className={styles.progress}
							aria-label="Days remaining on project"
							value={project.daysRemaining}
							aria-valuemin="0"
							aria-valuenow={project.daysRemaining}
							aria-valuemax={project.totalDays}
							max={project.totalDays}>
						</progress>

						<p><GoClock />{project.daysRemaining} {project.daysRemaining === 1 ? "day" : "days"} to go</p>
					</div>
				</li>
			))}
		</ul>
	);
}