module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:promise/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:unicorn/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/unicorn',
	],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},

	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
	},

	overrides: [
		{
			files: '*.test.(js|jsx|ts|tsx)',

			extends: 'plugin:jest/all',

			env: {
				jest: true,
			},
		},
	],

	rules: {
		// eslint-plugin-import
		'import/order': [
			'error',
			{
				'alphabetize': {
					order: 'asc',
				},
				'groups': [
					['builtin', 'external'],
					'internal',
					['index', 'parent', 'sibling'],
					'object',
				],
				'newlines-between': 'always',
				'pathGroups': [
					{
						pattern: '#/**',
						group: 'internal',
					},
				],
			},
		],

		// eslint-plugin-node
		'node/no-missing-import': [
			'error',
			{
				tryExtensions: ['.ts', '.js', '.json', '.node'],
			},
		],
		'node/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: ['modules'],
			},
		],

		// eslint-plugin-promise
		'promise/prefer-await-to-callbacks': 'error',
		'promise/prefer-await-to-then': 'error',

		// eslint-plugin-unicorn
		'unicorn/custom-error-definition': 'error',
		'unicorn/no-unused-properties': 'warn',
		'unicorn/prefer-flat-map': 'error',
		'unicorn/prefer-replace-all': 'error',
	},
};
