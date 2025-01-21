import styles from "./InputDropDown.module.css";

import IInputDropDown from "./IInputDropDown.ts";
import React, { useCallback, useState } from "react";

/**
 * InputDropDown component
 */
export default function InputDropDown({ visibleDropDown, addTodo, onToggleVisibleDropDown }: IInputDropDown) {
	const [inputValue, setInputValue] = useState("");

	/**
	 * Listen Enter key to add new todo
	 */
	const onInputKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.code === "Enter") {
				addTodo(inputValue);
				setInputValue("");
			}
		},
		[addTodo, inputValue],
	);

	/**
	 * Type of arrow icon (down/up)
	 */
	const Arrow = useCallback(() => {
		return visibleDropDown ? (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 10L12 15L17 10" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		) : (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 14L12 9L17 14" stroke="#E9E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}, [visibleDropDown]);

	return (
		<div className={styles["input-dropdown-container"]}>
			<div className={styles["input-dropdown-arrow"]} onClick={onToggleVisibleDropDown}>
				<Arrow />
			</div>
			<div>
				<input
					className={styles["input-dropdown"]}
					type="text"
					placeholder="What needs to be done?"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={onInputKeyDown}
				/>
			</div>
		</div>
	);
}
