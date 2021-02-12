import romanNumerals from './romanNumerals'

describe('Roman to Arabic number conversion', () => {

  it('converts from Roman to Arabic', () => {
    const romanNumber = 'MCMXCIX';
    const expectedResult = 1999;
    const result = romanNumerals.fromRoman(romanNumber);

    expect(result).toEqual(expectedResult);
  });

  it('is same number after two conversions', () => {
    const romanNumber = 'MCMXCIX';
    const result = romanNumerals.toRoman(romanNumerals.fromRoman(romanNumber));

    expect(result).toEqual(romanNumber);
  });

  it('shows invalid number message', () => {
    const romanNumber = 'XVIV';
    const result = romanNumerals.fromRoman(romanNumber);

    expect(result).toEqual('VIV is invalid, use IX instead');
  });

});

describe('Arabic to Roman number conversion', () => {

  it('converts from Arabic to Roman', () => {
    const arabicNumber = 1999;
    const expectedResult = 'MCMXCIX';
    const result = romanNumerals.toRoman(arabicNumber);

    expect(result).toEqual(expectedResult);
  });

  it('is same number after two conversions', () => {
    const arabicNumber = 1999;
    const result = romanNumerals.fromRoman(romanNumerals.toRoman(arabicNumber));

    expect(result).toEqual(arabicNumber);
  });

});