import test from 'ava';
import {
  formatToBRL,
  formatToCAEPF,
  formatToCEP,
  formatToCNPJ,
  formatToCPF,
  formatToCPFOrCNPJ,
  formatToCapitalized,
  formatToDate,
  formatToDateTime,
  formatToGenericPhone,
  formatToHiddenDigits,
  formatToList,
  formatToNumber,
  formatToPhone,
  formatToRG
} from '../src/brazilian-values';

test('formatToBRL', (context) => {
  context.is(formatToBRL(1200.504), 'R$ 1.200,50');
  context.is(formatToBRL(0), 'R$ 0,00');
  context.is(formatToBRL('-74.89'), 'R$ -74,89');
});

test('formatToCapitalized', (context) => {
  context.is(formatToCapitalized('cnpj da empresa X'), 'CNPJ da Empresa X');
  context.is(formatToCapitalized('JOAO ALVES DOS SANTOS FILHO'), 'Joao Alves dos Santos Filho');
  context.is(formatToCapitalized('SERVIDOR PÚBLICO MUNICIPAL'), 'Servidor Público Municipal');
  context.is(
    formatToCapitalized('   os PrimEIROS  HOMens da tERra', {
      wordsToKeepLowerCase: ['os', 'da']
   }),
   'Os Primeiros Homens da Terra'
  );
  context.is(
    formatToCapitalized('nova tv foi lançada', {
      wordsToKeepUpperCase: ['tv']
    }),
    'Nova TV Foi Lançada'
  );
});

test('formatToCapitalized don\'t trim whitespaces when `trimTrailingWhiteSpaces` is false', (context) => {
  context.is(
    formatToCapitalized('   COM Espaços ANTES E DEPOIS \n\r', {
      wordsToKeepLowerCase: ['e'],
      trimTrailingWhiteSpaces: false
    }),
    ' Com Espaços Antes e Depois '
  );
});

test('formatToCapitalized don\'t transform first word to lower-case', (context) => {
  context.is(
    formatToCapitalized('a primeira palavra é capitalizada', {
      wordsToKeepLowerCase: ['a', 'é']
    }),
    'A Primeira Palavra é Capitalizada'
  );

  context.is(
    formatToCapitalized(' a primeira palavra é capitalizada mesmo com espaços ', {
      trimTrailingWhiteSpaces: false,
      wordsToKeepLowerCase: ['a', 'é', 'com']
    }),
    ' A Primeira Palavra é Capitalizada Mesmo com Espaços '
  );
});

test('formatToCEP', (context) => {
  context.is(formatToCEP('15998030'), '15998-030');
  context.is(formatToCEP('159980'), '15998-0');
});

test('formatToCNPJ', (context) => {
  context.is(formatToCNPJ('128781'), '12.878.1');
  context.is(formatToCNPJ('32284981000138'), '32.284.981/0001-38');
  context.is(formatToCNPJ('00.0.000.00.00--00-00'), '00.000.000/0000-00');
});

test('formatToCPF', (context) => {
  context.is(formatToCPF('00000000000'), '000.000.000-00');
  context.is(formatToCPF('00000000'), '000.000.00');
  context.is(formatToCPF('366.418.768-70'), '366.418.768-70');
});

test('formatToCPFOrCNPJ', (context) => {
  context.is(formatToCPFOrCNPJ('00000000000'), '000.000.000-00');
  context.is(formatToCPFOrCNPJ('00000000'), '000.000.00');
  context.is(formatToCPFOrCNPJ('366.418.768-70'), '366.418.768-70');
  context.is(formatToCPFOrCNPJ('32284981000138'), '32.284.981/0001-38');
  context.is(formatToCPFOrCNPJ('00.0.000.00.00--00-00'), '00.000.000/0000-00');
});

test('formatToDate', (context) => {
  context.is(formatToDate(new Date(2002, 7, 21)), '21/08/2002');
});

test('formatToDateTime', (context) => {
  context.is(formatToDateTime(new Date(2002, 7, 21, 18, 30)), '21/08/2002 18:30');
});

test('formatToList', (context) => {
  context.is(formatToList(['Vitor', 'William', 'Fernando']), 'Vitor, William e Fernando');
  context.is(formatToList([]), '');
  context.is(formatToList(['1', '2']), '1 e 2');
  context.is(formatToList(['Direito Civil']), 'Direito Civil');
});

test('formatToNumber', (context) => {
  context.is(formatToNumber(0), '0');
  context.is(formatToNumber(-1299), '-1.299');
  context.is(formatToNumber(.981), '0,981');
  context.is(formatToNumber('19898.1298'), '19.898,1298');
});

test('formatToPhone', (context) => {
  context.is(formatToPhone('11'), '(11');
  context.is(formatToPhone('11971626'), '(11) 9716-26');
  context.is(formatToPhone('1197162679'), '(11) 9716-2679');
  context.is(formatToPhone('11971626799'), '(11) 9 7162-6799');
});

test('formatToRG', (context) => {
  context.is(formatToRG('000000000', 'SP'), '00.000.000-0');
  context.is(formatToRG('00.00.0000-a', 'RJ'), '00.000.000-A');
  context.is(formatToRG('00.000.000-B', 'SP'), '00.000.000-B');
  context.is(formatToRG('00000000x', 'RJ'), '00.000.000-X');
  context.is(formatToRG('MG-14.808.688', 'MG'), 'MG-14.808.688');
});

test('formatToGenericPhone', (context) => {
  context.is(formatToGenericPhone('23456789'), '2345-6789')
  context.is(formatToGenericPhone('923456789'), '92345-6789')
  context.is(formatToGenericPhone('21923456789'), '(21) 92345-6789')
  context.is(formatToGenericPhone('021923456789'), '021 92345-6789')
  context.is(formatToGenericPhone('5521923456789'), '+55 21 92345-6789')
});

test('formatToCAEPF', (context) => {
  context.is(formatToCAEPF('1234567'), '123.456.7')
  context.is(formatToCAEPF('12345678900199'), '123.456.789/001-99')
  context.is(formatToCAEPF('00.000.0.0--0-0000.00'), '000.000.000/000-00')
  context.is(formatToCAEPF('123.456.789/001-99'), '123.456.789/001-99')
})

test('formatToHiddenDigits', (context) => {
  context.is(formatToHiddenDigits('00.000-000'), '**.*00-000');
  context.is(formatToHiddenDigits('03/04/2002', { hider: '-' }), '--/-4/2002');
  context.is(formatToHiddenDigits('111.111.111-11', { range: [4, 9] }), '111.***.***-11');
  context.is(formatToHiddenDigits('12.345.678-9', { hider: '#', range: 5 }), '##.###.678-9');
  context.is(formatToHiddenDigits('52.715.348/0001-69', { hider: '@', range: -9 }), '52.715.@@@/@@@@-@@');
});
