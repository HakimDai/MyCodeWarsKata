import { comp } from './6Kyu-AreTheyTheSame';

describe('Fixed Tests comp', function () {
  it('Basic tests', function () {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    expect(comp(a1, a2)).toBe(true);

    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = [
      11 * 21,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    expect(comp(a1, a2)).toBe(false);
  });
});
