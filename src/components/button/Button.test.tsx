import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
	it("Renders correctly", () => {
		const onClick = jest.fn();
		render(<Button label={"All"} active={true} onClick={onClick} />);
		render(<Button label={"Active"} active={false} onClick={onClick} />);

		const buttonAll = screen.getByText("All");
		const buttonActive = screen.getByText("Active");

		expect(buttonAll).toBeInTheDocument();
		expect(buttonAll).toHaveClass("button-active");

		expect(buttonActive).toBeInTheDocument();
		expect(buttonActive).toHaveClass("button");
	});

	it("Return label by click", () => {
		let label = "";
		const onClick = (l: string) => (label = l);

		render(<Button label={"All"} active={true} onClick={() => onClick("All")} />);

		const button = screen.getByText("All");
		fireEvent.click(button);

		expect(label).toBe("All");
	});
});
