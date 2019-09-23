module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "camelcase": ["error", { 
        allow: ["store_getters", "store_actions", "store_mutations", "post_logout_redirect_uri", "response_type", "redirect_uri", "client_id"]
    }],
    'comma-dangle': 'error',
    'comma-spacing': [
        'error',
        {
            'before': false,
            'after': true
        }
    ],
    'comma-style': [ 'error', 'last' ],
    'func-call-spacing': [ 'error', 'never' ],
    'indent': ['error', 4],
    'new-cap': [
        'error',
        {
            'properties': false
        }
    ],
    'no-trailing-spaces': 'warn',
    'new-parens': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'warn',
    'object-curly-spacing': [ 'error', 'always' ],
    'semi': ['error', 'always'],
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always",
    }],
    "space-infix-ops": "error"
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
