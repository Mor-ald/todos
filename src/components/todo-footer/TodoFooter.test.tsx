import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import TodoFooter from "./TodoFooter.tsx";

describe("TodoFooter", () => {
	test("Renders children correctly", () => {
		render(
			<TodoFooter>
				<p>Test Child</p>
			</TodoFooter>,
		);

		expect(screen.getByText("Test Child")).toBeInTheDocument();
	});

	test("Has correct class name", () => {
		render(
			<TodoFooter>
				<p>Test Child</p>
			</TodoFooter>,
		);

		expect(screen.getByTestId("todo-footer")).toHaveClass("todo-footer");
	});
});
