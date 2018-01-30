module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'import'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'time', 'timeEnd', 'warn', 'error']
      }
    ],
    'comma-dangle': [2, 'never'],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
        optionalDependencies: false
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
