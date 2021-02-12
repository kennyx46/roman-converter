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

const invalidToValidCharactersMapping = {
  'CMCM': 'MDCCC', 
  'CMD': 'MCD',
  'CMCD': 'MIII', 
  'CMC': 'M', 
  'DD': 'M', 
  'DCD': 'CM', 
  'CDCD': 'DCCC', 
  'CDC': 'D', 
  'CCCC': 'CD', 
  'XCXC': 'CLXXX', 
  'XCL': 'CXL', 
  'XCXL': 'CIII', 
  'XCX': 'C', 
  'LL': 'C', 
  'LXL': 'XC', 
  'XLXL': 'LXXX', 
  'XLX': 'L', 
  'XXXX': 'XL', 
  'IXIX': 'XVIII', 
  'IXV': 'XIV', 
  'IXIV': 'XIII', 
  'IXI': 'X', 
  'IVIV': 'VIII', 
  'IVI': 'V', 
  'IIII': 'IV', 
  'VV': 'X', 
  'VIV': 'IX', 
  'VIIII': 'IX'
};

const invalidCharacters = Object.keys(invalidToValidCharactersMapping);

const reversedValues = Object.keys(symbolMappings)
  .map((num) => parseInt(num))
  .sort((num1, num2) => num1 > num2)
  .reverse();

const isNumber = (val) => /^\d+$/.test(val);

export const fromRoman = (romanNumber) => {
    let result = 0
    let i = 0
    let numeral = romanNumber
    while (numeral.length > 0 && i < reversedValues.length) {
      let symbol = reversedValues[i]
      for (let j = 0; j < invalidCharacters.length; j++) {
        const character = invalidCharacters[j];
        if (numeral.startsWith(character)) {
          return `${character} is invalid, use ${invalidToValidCharactersMapping[character]} instead`;
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

  if (!isNumber(number)) {
    return "Invalid Number";
  }

  if (number <= 0 || number > 4000) {
    return "Number should be > 0 and < 4000";
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