import calculateCAEPFDigit from "./calculateCAEPFDigit";
import { CheckSums } from "./generateCheckSums";

/**
 * Generate CAEPF checksums. Generate simple checksums, add 12 and subtract 100
 * if it's more than that. Used to validate document number.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
const generateCAEPFCheckSums = (
  numbers: Array<number>,
  validators: Array<number>,
): CheckSums => {
  const value = numbers.slice()
  value[12] = (calculateCAEPFDigit(value.slice(0, 12), validators.slice(1, 13)))
  value[13] = (calculateCAEPFDigit(value.slice(0, 13), validators))

  const dv = (Number(`${value[12]}${value[13]}`) + 12) % 100

  return [Math.floor(dv / 10), dv % 10]
};

export default generateCAEPFCheckSums;
