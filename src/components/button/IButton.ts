/**
 * Button component props
 */
export default interface IButton {
	label: string;
	active: boolean;
	onClick(label?: string): void;
}
