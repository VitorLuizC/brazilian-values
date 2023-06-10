/** A {@link RegExp} that matches numbers between `0-9`. */
const DIGIT = /^\d$/;

export type DigitCharacterNode = {
  kind: 'digit';

  /** The digit number. */
  digit: number;
  character: string;
};

export type OtherCharacterNode = {
  kind: 'other';
  character: string;
};

export type RootCharacterNode = {
  kind: 'root';
  digits: number;
  children: (DigitCharacterNode | OtherCharacterNode)[];
};

/**
 * Parses the received `string` value to a tree of characters.
 * @param value
 */
const parseToCharacters = (value: string): RootCharacterNode => {
  let digits = 0;

  const children = value.split('').map((character: string): DigitCharacterNode | OtherCharacterNode => {
    if (DIGIT.test(character))
      return {
        character,
        kind: 'digit',
        digit: ++digits, // It returns the incremented value of 'digits'.
      };
    return {
      character,
      kind: 'other',
    };
  });

  return {
    digits,
    children,
    kind: 'root',
  };
};

export default parseToCharacters;
