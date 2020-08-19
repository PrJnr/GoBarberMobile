module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    es6: true,
    jest: true,
    browser: true,
},
extends: ['airbnb', 'prettier', 'prettier/react'],
globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
},
parser: 'babel-eslint',
parserOptions: {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module', // pode ser script
},
plugins: ['react', 'react-hooks', 'prettier'],
rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx'] },
    ],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
},
settings: {
    'import/resolver': {
        'node': { //Para resolver erro: 'unable to resolve path to module (eslint)'
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
        },
        'babel-plugin-root-import': {
            rootPathSuffix: 'src',
           // rootPathPrefix: '~',
        },
    },
},
};
