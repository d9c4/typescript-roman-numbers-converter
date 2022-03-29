import { RomanNumber } from './RomanNumber';

export const BaseNumbers = [
  new RomanNumber(1000, 'M'),
  new RomanNumber(900, 'CM'),
  new RomanNumber(500, 'D'),
  new RomanNumber(400, 'CD'),
  new RomanNumber(100, 'C'),
  new RomanNumber(90, 'XC'),
  new RomanNumber(50, 'L'),
  new RomanNumber(40, 'XL'),
  new RomanNumber(10, 'X'),
  new RomanNumber(9, 'IX'),
  new RomanNumber(5, 'V'),
  new RomanNumber(4, 'IV'),
  new RomanNumber(1, 'I'),
];

export function toRoman(x: number): string {
  let i: number;
  let romanNumber: RomanNumber;
  if (x <= 0 || x > 3999) {
    return '';
  } else {
    i = 0;
    let toReturn: string = '';
    x = Math.floor(x);
    while (x > 0) {
      romanNumber = BaseNumbers[i];
      if (Math.floor(x / romanNumber.num) === 0) {
        ++i;
      } else {
        toReturn = toReturn + romanNumber.str;
        x -= romanNumber.num;
      }
    }
    return toReturn;
  }
}

export function toArabic(x: string): number | null {
  let romanNumeral = x.toUpperCase();
  if (!isRoman(romanNumeral)) {
    return null;
  }
  let result = 0;

  let i = 0;

  while (romanNumeral.length > 0 && i < BaseNumbers.length) {
    const romanNumber = BaseNumbers[i];
    if (romanNumeral.startsWith(romanNumber.str)) {
      result += romanNumber.num;
      romanNumeral = romanNumeral.substring(romanNumber.str.length);
    } else {
      i++;
    }
  }

  if (romanNumeral.length > 0) {
    return null;
  }

  return result;
}

export function isRoman(x: string): boolean {
  const regex = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
  return regex.test(x);
}
