/**
 * Numbers used to check a document or something containing numbers.
 */
type CheckSums = [ number, number ];

/**
 * Generate check sums. Multiply numbers to validators and sum them to generate
 * check sums, they're used to check if numbers are valid.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
const generateCheckSums = (
  numbers: Array<number>,
  validators: Array<number>,
): CheckSums => {
  const initialCheckSums: CheckSums = [ 0, 0 ];

  return validators.reduce(([ checkerA, checkerB ], validator, index) => [
    (index === 0) ? 0 : (checkerA + numbers[index - 1] * validator),
    checkerB + numbers[index] * validator
  ], initialCheckSums) as CheckSums;
};

export default generateCheckSums;
