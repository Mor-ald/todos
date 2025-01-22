import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList.tsx";
import initialTodosData from "../todos/InitialTodosData.ts";

describe("TodoList", () => {
	it("Renders correctly", () => {
		const complete = jest.fn();

		render(<TodoList visible={true} todos={initialTodosData} completeTodo={complete} />);

		expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
		expect(screen.getByText("Прекрасный код")).toBeInTheDocument();
		expect(screen.getByText("Покрытие тестами")).toBeInTheDocument();

		expect(screen.getByTestId("todo-list")).toBeInTheDocument();
		expect(screen.getByTestId("todo-list")).toHaveClass("todo-list");
	});

	it("Ul is hidden", () => {
		const complete = jest.fn();

		render(<TodoList visible={false} todos={initialTodosData} completeTodo={complete} />);

		expect(screen.getByTestId("todo-list")).toHaveAttribute("hidden");
	});
});
