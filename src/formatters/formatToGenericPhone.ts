import mapToNumeric from "../helpers/mapToNumeric";

/**
 * Formats a phone value into brazilian common phone formats.
 * @example ```js
 * formatToGenericPhone('23456789')
 * //=> '2345-6789'
 *
 * formatToGenericPhone('923456789')
 * //=> '92345-6789'
 *
 * formatToGenericPhone('21923456789')
 * //=> '(21) 92345-6789'
 *
 * formatToGenericPhone('021923456789')
 * //=> '021 92345-6789'
 *
 * formatToGenericPhone('5521923456789')
 * //=> '+55 21 92345-6789'
 * ```
 * @param value
 * @param countryCodeLength
 */
const formatToGenericPhone = (
  value: string,
  /*
    Brazil country code: +55
  */
  countryCodeLength: number = 2
): string => {
  const phone = mapToNumeric(value);
  if (phone.length === 8) {
    return phone.replace(/(^\d{4})(\d{4}$)/gi, "$1-$2");
  }
  if (phone.length === 9) {
    return phone.replace(/(^\d{5})(\d{4}$)/gi, "$1-$2");
  }
  if (phone.length === 10) {
    return phone.replace(/(^\d{2})(\d{4})(\d{4}$)/gi, "($1) $2-$3");
  }
  if (phone.length === 11) {
    return phone.replace(/(^\d{2})(\d{4,5})(\d{4}$)/gi, "($1) $2-$3");
  }
  if (phone.length === 12) {
    return phone.replace(/(^\d{3})(\d{5})(\d{4}$)/gi, "$1 $2-$3");
  }
  const re = new RegExp(
    `([0-9]{${countryCodeLength}})([0-9][0-9])([0-9]{5})([0-9]{4})`,
    "gi"
  );
  return phone.replace(re, "+$1 $2 $3-$4");
};

export default formatToGenericPhone;
