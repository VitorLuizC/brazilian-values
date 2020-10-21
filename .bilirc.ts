import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  input: 'src/brazilian-values.ts',
  output: {
    format: [
      'es',
      'esm',
      'cjs',
      'commonjs',
      'umd',
      'umd-min'
    ],
    moduleName: 'BrazilianValues',
    fileName: ({ format }, defaultFileName) => {
      if (format === 'es')
        return 'brazilian-values.mjs';
      if (format === 'cjs')
        return 'brazilian-values.cjs';
      if (format === 'commonjs')
        return 'brazilian-values.js';
      return defaultFileName;
    }
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
