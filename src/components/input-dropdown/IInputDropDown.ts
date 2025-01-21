/**
 * InputDropDown props
 */
export default interface IInputDropDown {
	visibleDropDown: boolean;
	addTodo(text: string): void;
	onToggleVisibleDropDown(): void;
}
