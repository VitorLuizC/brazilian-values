/** A {@link RegExp} that matches numbers between `0-9`. */
const DIGIT = /^\d$/;

export type DigitCharacterNode = {
  kind: "digit";

  /** The digit number. */
  digit: number;
  character: string;
};

export type OtherCharacterNode = {
  kind: "other";
  character: string;
};

export type RootCharacterNode = {
  kind: "root";
  digits: number;
  children: (DigitCharacterNode | OtherCharacterNode)[];
};

/**
 * Parses the received `string` value to a tree of characters.
 * @param value
 */
const parseToCharacters = (value: string): RootCharacterNode => {
  let digits = 0;

  return {
    digits,
    kind: "root",
    children: value.split("").map((character, index) =>
      DIGIT.test(character)
        ? {
            character,
            kind: "digit",
            digit: ++digits, // It returns the incremented value of 'digits'.
          }
        : {
            character,
            kind: "other",
          }
    ),
  };
};

export default parseToCharacters;
