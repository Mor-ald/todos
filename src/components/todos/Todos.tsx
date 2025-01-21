import styles from "./Todos.module.css";
import { useCallback, useState } from "react";
import { Todo } from "../../ts/Todo.ts";
import InitialTodosData from "./InitialTodosData.ts";
import { CurrentTodosDisplay } from "../../ts/CurrentTodosDisplay.ts";
import InputDropDown from "../input-dropdown/InputDropDown.tsx";

/**
 * Todos component
 */
export default function Todos() {
	const [todos, setTodos] = useState<Todo[]>(InitialTodosData);
	const [visibleDropDown, setVisibleDropDown] = useState<boolean>(true);
	const [currentTodosDisplay, setCurrentTodosDisplay] = useState<CurrentTodosDisplay>("All");
	const [filterFeature, setFilterFeature] = useState<boolean>(false);

	/**
	 * Add new todo in todos
	 */
	const addTodo = useCallback(
		(text: string) => {
			return setTodos([...todos, { id: todos.length, text: text, completed: false }]);
		},
		[todos],
	);

	/**
	 * Complete todo
	 */
	const completeTodo = useCallback(
		(id: number) => {
			const newTodos = [...todos];
			newTodos.find((todo) => todo.id === id)!.completed = true;

			return setTodos(newTodos);
		},
		[todos],
	);

	/**
	 * Remove completed todos
	 */
	const removeCompletedTodos = useCallback(() => {
		return setTodos(todos.filter((todo) => !todo.completed));
	}, [todos]);

	/**
	 * Filter todos (all/active/completed)
	 */
	const filterTodos = useCallback(() => {
		switch (currentTodosDisplay) {
			case "Active":
				return todos.filter((todo) => !todo.completed);
			case "Completed":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	}, [currentTodosDisplay, todos]);

	/**
	 * Switch filter type by button
	 */
	const onSwitchFilterType = useCallback((display: CurrentTodosDisplay) => {
		setCurrentTodosDisplay(display);
		setFilterFeature(display === "Active" || display === "Completed");
	}, []);

	const onToggleVisibleDropDown = useCallback(() => {
		setVisibleDropDown(!visibleDropDown);
	}, [visibleDropDown]);

	return (
		<div className={styles["todos-container"]}>
			<div className={styles["todos-header"]}>todos</div>
			<div className={styles["todos-content"]}>
				<InputDropDown visibleDropDown={visibleDropDown} addTodo={addTodo} onToggleVisibleDropDown={onToggleVisibleDropDown} />
			</div>
		</div>
	);
}
