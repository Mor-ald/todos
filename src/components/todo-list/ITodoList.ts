import { Todo } from "../../ts/Todo.ts";

/**
 * TodoList props
 */
export interface ITodoList {
	visible: boolean;
	todos: Todo[];
	completeTodo(id: number): void;
}
