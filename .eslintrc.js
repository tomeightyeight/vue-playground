module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "indent": [
        "error",
        2
    ],

    "linebreak-style": [
        "error",
        "unix"
    ],

    "quotes": [
        "error",
        "single"
    ],

    "semi": [
        "error",
        "always"
    ],

    "no-console": 0,

    "no-undefined": 0,

    // allow paren-less arrow functions
    'arrow-parens': 0,

    // allow async-await
    'generator-star-spacing': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
