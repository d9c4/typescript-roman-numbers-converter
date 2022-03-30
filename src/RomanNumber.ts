export class RomanNumber {
  num: number;
  str: string;

  // elaborations
  baseUnits: number = 0;
  thousands: number = 0;

  // future impl
  // million: number = 0;

  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
}
