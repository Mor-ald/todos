import styles from "./TodoFooter.module.css";

import { ReactNode } from "react";

/**
 * TodoFooter component
 */
export default function TodoFooter({ children }: { children: ReactNode }) {
	return (
		<div className={styles["todo-footer"]} data-testid="todo-footer">
			{children}
		</div>
	);
}
