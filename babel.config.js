module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        targets: { node: 'current' },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-private-methods'], // 필요 시 추가
};