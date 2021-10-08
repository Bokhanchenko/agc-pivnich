module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".vue"]
      }
    }
  },
  plugins: ["vue", "import"],
  rules: {
    semi: ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "no-param-reassign": ["error", { props: false }],
    camelcase: "off",
    "arrow-body-style": "off",
    "prefer-destructuring": "off",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-debugger": "error",
    "no-plusplus": "off",
    "class-methods-use-this": "warn",
    "no-use-before-define": ["error", { functions: false }],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^esri/", "^@/"],
        caseSensitive: false
      }
    ],
    "vue/object-curly-spacing": "off",
    "object-curly-newline": "off",
    "vue/no-boolean-default": "error",
    "vue/match-component-file-name": ["error", { extensions: ["vue"] }],
    "vue/require-prop-types": "warn",
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/require-default-prop": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/valid-v-bind-sync": "off",
    "standard/object-curly-even-spacing": "off",
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          "extends",
          "mixins",
          "layout",
          "middleware",
          "scrollToTop",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          ["provide", "inject"],
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          "emits",
          "setup",
          ["props", "propsData"],
          "asyncData",
          "fetch",
          "data",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          "head",
          ["template", "render"],
          "renderError",
          "ROUTER_GUARDS",
          "validate"
        ]
      }
    ]
  }
};
