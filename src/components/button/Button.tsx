import styles from "./Button.module.css";

import IButton from "./IButton.ts";

/**
 * Button component
 */
export default function Button({ label, active, onClick }: IButton) {
	return (
		<span className={styles[!active ? "button" : "button-active"]} onClick={() => onClick(label)}>
			{label}
		</span>
	);
}
