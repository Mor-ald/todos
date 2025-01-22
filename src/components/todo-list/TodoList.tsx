import styles from "./TodoList.module.css";
import { ITodoList } from "./ITodoList.ts";
import TodoItem from "../todo-item/TodoItem.tsx";

/**
 * Todolist component
 */
export default function TodoList({ visible, todos, completeTodo }: ITodoList) {
	return (
		<ul className={styles["todo-list"]} hidden={!visible} data-testid="todo-list">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} />
			))}
		</ul>
	);
}
