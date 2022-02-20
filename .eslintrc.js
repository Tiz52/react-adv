module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'object-curly-spacing': [
			'error', 
			'always'
		],
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'block-spacing': [
			'error',
			'always',
		],
		'comma-spacing': [
			'error',
			{ 'before': false, 'after': true },
		],
		'arrow-spacing': [
			'error',
			{ 'before': true, 'after': true },
		],
		'react/prop-types': [ 'off' ],
		'no-unused-vars': [ 'warn' ],
	}
};
