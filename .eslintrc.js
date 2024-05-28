module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "jsx-a11y", "react-hooks"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  // rules: {
  //     'jsx-a11y/img-redundant-alt': 'off',
  //     'no-console': 'warn',
  //     'react/react-in-jsx-scope': 'off',
  //     'react/jsx-uses-react': 'off',
  //     'react/jsx-uses-vars': 'off',
  //     'react/jsx-no-undef': 'off',
  //     'react/no-unknown-property': 'off',
  // },
};
