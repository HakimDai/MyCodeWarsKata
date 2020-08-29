import { Kata } from './7Kyu-Square Every Digit';

describe("squareDigits", function() {
    function sol(num: number) {
        return +num.toString().split('').map(n => Math.pow(+n,2)).join('');
    }

    it("should pass a sample test", function() {
        expect(Kata.squareDigits(9119)).toBe( 811181);
    });

    it("should pass some fixed tests", function() {
        expect(Kata.squareDigits(3212)).toBe(9414);
        expect(Kata.squareDigits(2112)).toBe(4114);
    });

    it("should pass some random tests", function() {
        for (let i = 0; i < 100; ++i) {
            let num = Math.floor((Math.random() * 1000) + 1);

            let actual = Kata.squareDigits(num);
            let expected = sol(num);

            expect(actual).toBe(expected);
        }
    });
});
