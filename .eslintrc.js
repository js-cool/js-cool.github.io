module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },

  extends: [
    'willin',
    '@nuxtjs/eslint-config-typescript',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  settings: {
    'import/core-modules': ['vue', '@nuxt/types']
  },

  rules: {
    'import/extensions': [
      1,
      {
        ts: 'never'
      }
    ],
    // '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
