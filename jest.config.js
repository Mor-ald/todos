/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	testEnvironment: "jsdom",
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy'
	},
};