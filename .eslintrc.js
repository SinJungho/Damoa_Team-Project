// module.exports = {
//     // 파서 설정: Babel ESLint 파서를 사용하여 최신 JavaScript 문법을 지원
//     parser: '@babel/eslint-parser',

//     // extends: 기본적인 ESLint 추천 설정, React 추천 설정, 접근성 관련 설정을 사용
//     extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],

//     // plugins: ESLint가 추가적으로 사용할 플러그인들 설정
//     plugins: ['react', 'jsx-a11y', 'react-hooks'],

//     // env: 코드가 실행되는 환경 설정
//     env: {
//         browser: true, // 브라우저 환경을 지원
//         node: true, // Node.js 환경을 지원
//         es6: true, // ES6 문법을 지원
//     },

//     // settings: React 버전을 자동으로 감지하여 적절한 설정을 적용
//     settings: {
//         react: {
//             version: 'detect',
//         },
//     },

//     // rules: ESLint 규칙들을 설정
//     rules: {
//         'jsx-a11y/img-redundant-alt': 'off', // 접근성 규칙 중 이미지의 alt 속성이 redundant 하지 않도록 설정하는 규칙을 끔
//         'no-console': 'warn', // console.log 등의 사용을 경고로 표시
//         'react/react-in-jsx-scope': 'off', // React 17 이후로는 JSX를 사용하기 위해 React를 명시적으로 import 할 필요가 없으므로 이 규칙을 끔
//         'react/jsx-uses-react': 'off', // React를 사용하는 JSX 규칙을 끔 (React 17+)
//         'react/jsx-uses-vars': 'off', // 사용되지 않는 React 변수에 대한 경고를 끔
//         'react/jsx-no-undef': 'off', // 정의되지 않은 JSX 변수에 대한 경고를 끔
//         'react/no-unknown-property': 'off', // JSX 속성에 대해 잘못된 이름을 사용할 때 경고를 끔
//         'no-unused-vars': 'off', // 사용되지 않는 변수가 있을 때 경고를 끔
//     },
// };
