/**
 * Generate the next digit from a CAEPF number.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
 const calculateCAEPFDigit = (
  numbers: Array<number>,
  validators: Array<number>,
): number => {
  const digit = numbers.reduce(
    (digit, value, index) => digit += Number(value) * Number(validators[index]), 0
  )
  
  return (digit % 11) % 10
}

export default calculateCAEPFDigit