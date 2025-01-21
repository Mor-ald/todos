import styles from "./Todos.module.css";
import { useCallback, useEffect, useState } from "react";
import { Todo } from "../../ts/Todo.ts";
import InitialTodosData from "./InitialTodosData.ts";
import { CurrentTodosDisplay } from "../../ts/CurrentTodosDisplay.ts";
import InputDropDown from "../input-dropdown/InputDropDown.tsx";
import TodoList from "../todo-list/TodoList.tsx";

/**
 * Todos component
 */
export default function Todos() {
	const [todos, setTodos] = useState<Todo[]>(InitialTodosData);
	const [curTodos, setCurTodos] = useState<Todo[]>([]);
	const [visibleDropDown, setVisibleDropDown] = useState<boolean>(true);
	const [currentDisplayTodoType, setCurrentDisplayTodoType] = useState<CurrentTodosDisplay>("All");

	useEffect(() => {
		switch (currentDisplayTodoType) {
			case "Active":
				return setCurTodos(todos.filter((todo) => !todo.completed));
			case "Completed":
				return setCurTodos(todos.filter((todo) => todo.completed));
			default:
				return setCurTodos(todos);
		}
	}, [currentDisplayTodoType, todos]);

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

	const onToggleVisibleDropDown = useCallback(() => {
		setVisibleDropDown(!visibleDropDown);
	}, [visibleDropDown]);

	return (
		<div className={styles["todos-container"]}>
			<div className={styles["todos-header"]}>todos</div>
			<div className={styles["todos-content"]}>
				<InputDropDown visibleDropDown={visibleDropDown} addTodo={addTodo} onToggleVisibleDropDown={onToggleVisibleDropDown} />
				<TodoList todos={curTodos} completeTodo={completeTodo} />
			</div>
		</div>
	);
}
