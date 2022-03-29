import { toRoman } from '../src';

describe('testing index file', () => {
    test('converts 32 from arabic number format to roman number expecting XXXII', () => {
        expect(toRoman(32)).toMatch('XXXII');
    });
    test('tries to convert 4000 from arabic number format to roman number expecting an empty string due to limitations', () => {
        expect(toRoman(4000)).toMatch('');
    });
    test('tries to convert -104 from arabic number format to roman number expecting an empty string due to limitations', () => {
        expect(toRoman(-104)).toMatch('');
    });
});