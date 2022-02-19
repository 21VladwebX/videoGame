module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
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
			'never'
		],
		'no-mixed-spaces-and-tabs': 'error',
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'space-before-blocks': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'arrow-spacing': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
		'template-curly-spacing': ['error', 'always'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'keyword-spacing': ['error', { 
			'after': true,
			'before': true
		}],
		'key-spacing': ['error', {
			'afterColon': true,
			'mode': 'strict' 
		}]
	}
}
