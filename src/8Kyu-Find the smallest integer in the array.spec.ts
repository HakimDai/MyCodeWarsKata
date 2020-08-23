import {findSmallestInt} from './8Kyu-Find the smallest integer in the array';

describe("Smallest Integer Tests", function() {
    it("Fixed Tests", function() {
        expect(findSmallestInt([78,56,232,12,8])).toBe(8);
        expect(findSmallestInt([78,56,232,12,18])).toBe(12);
        expect(findSmallestInt([78,56,232,412,228])).toBe(56);
        expect(findSmallestInt([78,56,232,12,0])).toBe(0);
        expect(findSmallestInt([1,56,232,12,8])).toBe(1);
    });
});
