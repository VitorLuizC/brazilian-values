import formatToCNPJ from "./formatToCNPJ";
import formatToCPF from "./formatToCPF";

/**
 * Formats a `string` value into a CPF or CNPJ depending on the size of it
 * formatToCPFOrCNPJ('00000000000')
 * //=> '000.000.000-00'
 *
 * formatToCPFOrCNPJ('36641876870')
 * //=> '366.418.768-70'
 * 
 * @param value - A `string` value of a CPF or CNPJ. 
 */
const formatToCPFOrCNPJ = (
    value: string
) => {
    if (value.length <= 11){
        return formatToCPF(value);
    }
    return formatToCNPJ(value);
};

export default formatToCPFOrCNPJ;