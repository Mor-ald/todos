import { Todo } from "../../ts/Todo.ts";

/**
 * TodoItem component props
 */
export default interface ITodoItem {
	todo: Todo;
	completeTodo(id: number): void;
}
