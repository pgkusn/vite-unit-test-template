module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\js$': 'babel-jest',
    '^.+\.vue$': '@vue/vue3-jest'
  }
}