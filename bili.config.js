module.exports = {
  input: 'src/index.ts',
  banner: true,
  formats: ['es', 'cjs', 'umd'],
  plugins: [ 'typescript2' ],

  // TypeScript 2 settings
  'typescript2': {
    clean: true,
    cacheRoot: '.cache/',
    useTsconfigDeclarationDir: true
  }
};
