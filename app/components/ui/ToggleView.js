import { BsFillGridFill, BsList } from 'react-icons/bs'; {/* Using React icons here for speed, contrary to design */ }
import styles from "./ToggleView.module.css";

export default function ToggleView({ view, onToggle }) {
	return (
		<div className={styles.toggleContainer} aria-hidden="true">
			<button
				className={`${styles.toggleButton} ${view === "list" ? styles.active : ""}`}
				onClick={() => onToggle("list")}
				aria-label="Switch to list view"
				aria-pressed={view === "list"}
			>
				<BsList style={{ fontSize: "20px", marginRight: "8px" }} />
				List
			</button>

			<button
				className={`${styles.toggleButton} ${view === "grid" ? styles.active : ""}`}
				onClick={() => onToggle("grid")}
				aria-label="Switch to grid view"
				aria-pressed={view === "grid"}
			>
				<BsFillGridFill style={{ fontSize: "20px", marginRight: "8px" }} />
				Grid
			</button>
		</div >
	);
}
