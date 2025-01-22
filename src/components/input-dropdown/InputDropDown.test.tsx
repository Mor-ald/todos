import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import InputDropDown from "./InputDropDown";

describe("InputDropDown", () => {
	it("Renders correctly", () => {
		render(<InputDropDown visibleDropDown={true} addTodo={() => {}} onToggleVisibleDropDown={() => {}} />);

		const inputDropDown = screen.getByPlaceholderText("What needs to be done?");

		expect(inputDropDown).toBeInTheDocument();
		expect(inputDropDown).toHaveClass("input-dropdown");
	});

	it("Renders arrow down", () => {
		render(<InputDropDown visibleDropDown={true} addTodo={() => {}} onToggleVisibleDropDown={() => {}} />);
		expect(screen.getByTestId("arrow-element-down")).toBeInTheDocument();
	});

	it("Renders arrow up", () => {
		render(<InputDropDown visibleDropDown={false} addTodo={() => {}} onToggleVisibleDropDown={() => {}} />);
		expect(screen.getByTestId("arrow-element-up")).toBeInTheDocument();
	});

	it("Add todo calls by Enter", () => {
		const addTodo = jest.fn();

		render(<InputDropDown visibleDropDown={true} addTodo={addTodo} onToggleVisibleDropDown={() => {}} />);

		const inputDropDown = screen.getByPlaceholderText("What needs to be done?");

		fireEvent.change(inputDropDown, { target: { value: "input drop down" } });

		expect(inputDropDown).toHaveValue("input drop down");

		fireEvent.keyDown(inputDropDown, { key: "Enter", code: "Enter", charCode: 13, bubbles: true });

		expect(addTodo.mock.calls.length).toBe(1);
	});

	it("Toggle dropdown visible ", () => {
		let visible = false;

		render(<InputDropDown visibleDropDown={true} addTodo={() => {}} onToggleVisibleDropDown={() => (visible = !visible)} />);

		const arrow = screen.getByTestId("arrow-element");

		fireEvent.click(arrow);
		expect(visible).toBe(true);
	});
});
