import styles from "./TodoItem.module.css";

import ITodoItem from "./ITodoItem.ts";

/**
 * TodoItem component
 */
export default function TodoItem({ todo, completeTodo }: ITodoItem) {
	return (
		<li className={styles["todo-item"]} data-testid="todo-item">
			<input
				className={styles["todo-item-checkbox"]}
				type="checkbox"
				checked={todo.completed}
				data-testid="todo-item-checkbox"
				onChange={() => completeTodo(todo.id)}
			/>
			<span className={styles[!todo.completed ? "todo-item-text" : "todo-item-text-comp"]}>{todo.text}</span>
		</li>
	);
}
