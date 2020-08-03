# @romain-faust/eslint-config-react

> Shared [ESLint](https://eslint.org) configuration for React.js and React Native.

## Installation

```bash
yarn add --dev @romain-faust/eslint-config-react
```

### Dependencies

-   [@typescript-eslint/eslint-plugin](https://npmjs.org/package/@typescript-eslint/eslint-plugin) >=3.6.1
-   [@typescript-eslint/parser](https://npmjs.org/package/@typescript-eslint/parser) >=3.6.1
-   [eslint](https://npmjs.org/package/eslint) >=7.4.0
-   [eslint-config-prettier](https://npmjs.org/package/eslint-config-prettier) >=6.11.0
-   [eslint-plugin-eslint-comments](https://npmjs.org/package/eslint-plugin-eslint-comments) >=3.2.0
-   [eslint-plugin-import](https://npmjs.org/package/eslint-plugin-import) >=2.22.0
-   [eslint-plugin-jest](https://npmjs.org/package/eslint-plugin-jest) >=23.18.0
-   [eslint-plugin-prettier](https://npmjs.org/package/eslint-plugin-prettier) >=3.1.4
-   [eslint-plugin-promise](https://npmjs.org/package/eslint-plugin-promise) >=4.2.1
-   [eslint-plugin-react](https://npmjs.org/package/eslint-plugin-react) >=7.20.5
-   [eslint-plugin-react-hooks](https://npmjs.org/package/eslint-plugin-react-hooks) >=4.0.8
-   [eslint-plugin-react-native](https://npmjs.org/package/eslint-plugin-react-native) >=3.8.1
-   [eslint-plugin-unicorn](https://npmjs.org/package/eslint-plugin-unicorn) >=20.1.0
-   [prettier](https://npmjs.org/package/prettier) >=2.0.5

## Usage

Add `@romain-faust/eslint-config-react` to the [extends](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```json
{
	"extends": "@romain-faust/eslint-config-react"
}
```

For [React Native](https://reactnative.dev):

```json
{
	"extends": [
		"@romain-faust/eslint-config-react",
		"@romain-faust/eslint-config-react/native"
	]
}
```

## License

MIT
