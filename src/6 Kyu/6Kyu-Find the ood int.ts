// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.

export const findOdd = (xs: number[]) => {
  for (let nb of xs) {
    let count = 0;
    for (let i = 0; i < xs.length; i++) {
      if (nb === xs[i]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return nb;
    }
  }
};
