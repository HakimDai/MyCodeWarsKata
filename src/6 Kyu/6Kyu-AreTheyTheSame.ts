// Given two arrays a and b write a function
// comp(a, b) (compSame(a, b) in Clojure)
// that checks whether the two arrays have the "same" elements,
// with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared
// regardless of the order.

export const comp = (a1: number[] | null, a2: number[] | null): boolean => {
  if (a1 && a2) {
    a1.forEach((value) => {
      if (a2.indexOf(value ** 2) === -1) {
        return false;
      }
      a2.splice(a2.indexOf(value ** 2), 1);
    });
    if (a2.length === 0) {
      return true;
    }
  }
  return false;
};
