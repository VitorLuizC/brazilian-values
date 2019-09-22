import isDDD from './isDDD';

/**
 * Pattern for common brazilian telephone number formats, optionally with DDI,
 * DDD and the ninth digit.
 */
const PHONE_PATTERN = /^(\+55)? ?\(?(\d{2})?\)? ?9? ?\d{4}[-| ]?\d{4}$/;

/**
 * Check if value is a valid brazilian phone number. It can check a wide
 * variety of formats optionally with DDI, DDD and the ninth digit.
 * 
 * @example ```js
 * isPhone('+55 (11) 9 8273-1182')
 * //=> true
 * 
 * isPhone('11 9 8273 1182')
 * //=> true
 * 
 * isPhone('1139723768')
 * //=> true
 * 
 * isPhone('(23) 3972-3768')
 * //=> false
 * 
 * isPhone('(13) 6 5093-2093')
 * //=> false
 * 
 * isPhone('(81) 555 178')
 * //=> false
 * ```
 * @param value 
 */
const isPhone = (
  value: string,
): boolean => {
  if (!PHONE_PATTERN.test(value))
    return false;
  const [,,DDD] = PHONE_PATTERN.exec(value)!;
  return DDD ? isDDD(DDD): true;
};

export default isPhone;
