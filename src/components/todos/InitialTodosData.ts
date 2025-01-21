import { Todo } from "../../ts/Todo.ts";

/**
 * Initial data for Todos component
 */
const InitialTodosData: Todo[] = [
	{
		id: 1,
		text: "Тестовое задание",
		completed: false,
	},
	{
		id: 2,
		text: "Прекрасный код",
		completed: true,
	},
	{
		id: 3,
		text: "Покрытие тестами",
		completed: false,
	},
];

export default InitialTodosData;
