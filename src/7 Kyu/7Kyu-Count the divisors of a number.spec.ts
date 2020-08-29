import { divisors } from './7Kyu-Count the divisors of a number';


describe("basic tests", function() {
    it("Testing for 1", () => expect(divisors(1)).toBe(1));
    it("Testing for 10", () => expect(divisors(10)).toBe(4));
    it("Testing for 11", () => expect(divisors(11)).toBe(2));
    it("Testing for 54", () => expect(divisors(54)).toBe(8));
    it("Testing for 25", () => expect(divisors(25)).toBe(3));
    it("Testing for 64", () => expect(divisors(64)).toBe(7));
});

describe("Random tests", function() {
    const sol = (n: number) => Array.from({ length: n }, (_, i) => i + 1).filter(x => n % x === 0).length;

    for (let i = 0; i < 100; i++) {
        const n = Math.floor(Math.random() * 1000) + 1;
        it(`Testing for ${n}`, () => expect(divisors(n)).toBe(sol(n)));
    }
});
