/** @type {import("prettier").Config} */
module.exports = {
	plugins: [],
	useTabs: true,
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
	overrides: [{ files: '*.yml', options: { tabWidth: 2 } }],
}
