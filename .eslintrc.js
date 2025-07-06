module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 단일 단어 컴포넌트 이름 허용
    'vue/require-default-prop': 'off',       // 기본 Prop 강제 비활성화
    'no-unused-vars': ['error', { 
      args: 'none', // 함수/메서드 파라미터를 무시
      vars: 'all'   // 변수는 여전히 체크
    }],
    "no-extra-semi": "off",
  }
};