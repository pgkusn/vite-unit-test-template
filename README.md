# vite-unit-test-template
## Install dependencies

```sh
npm i -D jest @vue/test-utils @vue/vue3-jest @babel/core @babel/preset-env @babel/plugin-transform-runtime
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

### .babelrc

```json
{
  "presets": [
    ["@babel/preset-env"]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime"]
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