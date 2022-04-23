# vite-unit-test-template
## Install dependencies

```sh
npm i -D jest @vue/test-utils @vue/vue3-jest babel-core @babel/preset-env
```

## Add the following configuration

### jest.config.js

```js
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\js$': 'babel-jest',
    '^.+\.vue$': '@vue/vue3-jest'
  }
}
```

### babel.config.json

```json
{
  "presets": [
    ["@babel/preset-env"]
  ]
}
```

## Add a test script to the package.json
```json
{
  "scripts": {
    "test": "jest",
    ...
  },
  ...
}
```