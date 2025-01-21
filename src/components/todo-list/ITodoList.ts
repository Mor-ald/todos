import { Todo } from "../../ts/Todo.ts";

/**
 * TodoList props
 */
export interface ITodoList {
	todos: Todo[];
	completeTodo(id: number): void;
}
