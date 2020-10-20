import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  input: 'src/brazilian-values.ts',
  output: {
    format: [
      'esm',
      'cjs',
      'umd',
      'umd-min'
    ],
    moduleName: 'BrazilianValues'
  },
  plugins: {
    'typescript2': {
      clean: true,
      tsconfig: './tsconfig.build.json',
      useTsconfigDeclarationDir: true
    }
  }
};

export default configuration;
