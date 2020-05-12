module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["ember", "prettier", "hbs"],
  extends: ["eslint:recommended", "plugin:ember/recommended", "plugin:prettier/recommended", "prettier"],
  env: {
    browser: true
  },
  overrides: [
    {
      files: [
        ".template-lintrc.js",
        "ember-cli-build.js",
        "index.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/**/*.js",
        "node-tests/**/*.js",
        "tests/dummy/config/**/*.js"
      ],
      excludedFiles: ["addon/**", "addon-test-support/**", "app/**", "tests/dummy/app/**"],
      parserOptions: {
        sourceType: "script",
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ["node"]
    }
  ]
};
