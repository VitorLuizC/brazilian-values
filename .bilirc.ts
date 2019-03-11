import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  banner: true,
  input: 'src/brazilian-values.ts',
  output: {
    format: [
      'es',
      'cjs',
      'umd',
      'umd-min'
    ],
    moduleName: 'BrazilianValues'
  },
  plugins: {
    'typescript2': {
      clean: true,
      useTsconfigDeclarationDir: true
    }
  }
};

export default configuration;
