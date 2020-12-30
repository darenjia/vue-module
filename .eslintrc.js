module.exports = {
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	extends: ['plugin:vue/essential','eslint:recommended', 'prettier'],
	plugins: ['vue','prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	env: {
		browser: true,
		node: true,
		mocha: false,
		jest: false,
	},
};