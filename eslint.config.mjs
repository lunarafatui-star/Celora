import eslint from '@eslint/js';

export default [
  { ignores: [".next/**", "components/ui/**"] },
  eslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-empty": "off"
    }
  }
];
