import { numberToString } from './8Kyu-Convert a Number to a String';

describe("numberToString", function() {
    it("should work correctly", () => {
        expect(numberToString(67)).toBe('67');
        expect(numberToString(79585)).toBe('79585');
        expect(numberToString(79585)).not.toBe(79585);
        expect(numberToString(1+2)).toBe('3');
        expect(numberToString(1-2)).toBe('-1');
    });
});
