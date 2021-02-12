const symbolMappings = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

const invalidCharacters = ["CMCM", "CMD", "CMCD", "CMC", "DD", "DCD", "CDCD", "CDC", "CCCC", "XCXC", "XCL", "XCXL", "XCX", "LL", "LXL", "XLXL", "XLX", "XXXX", "IXIX", "IXV", "IXIV", "IXI", "IVIV", "IVI", "IIII", "VV", "VIV", "VIIII"];

const validReplacements = ["MDCCC", "MCD", "MIII", "M", "M", "CM", "DCCC", "D", "CD", "CLXXX", "CXL", "CIII", "C", "C", "XC", "LXXX", "L", "XL", "XVIII", "XIV", "XIII", "X", "VIII", "V", "IV", "X", "IX", "IX"]

const reversedValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

export const fromRoman = (numeral) => {
    let result = 0
    let i = 0
    while (numeral.length > 0 && i < reversedValues.length) {
      let symbol = reversedValues[i]
      for (let j = 0; j < invalidCharacters.length; j++) {
        if (numeral.startsWith(invalidCharacters[j])) {
          return `${invalidCharacters[j]} is invalid, use ${validReplacements[j]} instead`;
        }
      }
      if (numeral.startsWith(symbolMappings[symbol])) {
          result += symbol
          numeral = numeral.slice(symbolMappings[symbol].length)
      } else {
          i++
      }
    }

    if (numeral.length > 0) {
      return "Invalid number";
    }

    return result;
}

export const toRoman = (number) => {

  if (number <= 0 || number > 4000) {
    return "Number can not be converted";
  }

  let result = ''
  let i = 0;
  while (number > 0 && i < reversedValues.length) {
    const symbol = reversedValues[i]
    if (symbol <= number) {
      result += symbolMappings[symbol]
      number -= symbol
    } else {
      i++
    }
  }
  return result
}

const defaultExport = {
  fromRoman,
  toRoman,
}

export default defaultExport;