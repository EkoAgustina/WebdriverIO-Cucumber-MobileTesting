module.exports = {
  globals: {
    $: true,
    browser: true,
    driver: true
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true
  },
  extends: 'standard',
  plugins: [
    'standard',
    'promise',
    'webdriverio',
    'cucumber'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-useless-escape': 'off',
    'no-async-promise-executor': 'off',
    semi: 'off'
  }
}
