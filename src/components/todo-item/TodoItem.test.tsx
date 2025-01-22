import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem.tsx";

describe("TodoItem", () => {
	it("Renders correctly", () => {
		const complete = jest.fn();

		render(<TodoItem todo={{ id: 1, text: "test", completed: true }} completeTodo={complete} />);

		expect(screen.getByText("test")).toBeInTheDocument();
		expect(screen.getByText("test")).toHaveClass("todo-item-text-comp");
		expect(screen.getByTestId("todo-item")).toHaveClass("todo-item");
		expect(screen.getByTestId("todo-item-checkbox")).toHaveClass("todo-item-checkbox");
		expect(screen.getByTestId("todo-item-checkbox")).toBeChecked();
	});

	it("Correctly text class when todo is not completed", () => {
		const complete = jest.fn();

		render(<TodoItem todo={{ id: 1, text: "test", completed: false }} completeTodo={complete} />);

		expect(screen.getByText("test")).toHaveClass("todo-item-text");
	});

	it("Correctly calls completeTodo", () => {
		const complete = jest.fn();

		render(<TodoItem todo={{ id: 1, text: "test", completed: false }} completeTodo={complete} />);

		const checkBox = screen.getByTestId("todo-item-checkbox");

		fireEvent.click(checkBox);

		expect(complete.mock.calls.length).toBe(1);
	});
});
