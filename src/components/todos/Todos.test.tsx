import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Todos from "./Todos.tsx";

describe("TodoList", () => {
	it("Renders correctly", () => {
		render(<Todos />);

		expect(screen.getByText("todos")).toBeInTheDocument();
		expect(screen.getByText("2 items left")).toBeInTheDocument();

		expect(screen.getByText("All")).toBeInTheDocument();
		expect(screen.getByText("Active")).toBeInTheDocument();
		expect(screen.getByText("Completed")).toBeInTheDocument();

		expect(screen.getByText("Clear completed")).toBeInTheDocument();

		expect(screen.getByTestId("todo-list")).toBeInTheDocument();
		expect(screen.getByTestId("todo-list")).toHaveClass("todo-list");
	});
});
