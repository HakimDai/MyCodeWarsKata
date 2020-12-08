// Given two arrays a and b write a function
// comp(a, b) (compSame(a, b) in Clojure)
// that checks whether the two arrays have the "same" elements,
// with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared
// regardless of the order.

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 && a2) {
    return !a1.every((value) => gotNotTheSquare(value, a2));
  }
  return false;
}

const gotNotTheSquare = (value: number, values: number[]) => {
  return values.every((arrayValue) => value * value !== arrayValue);
};
