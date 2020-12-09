/*
Challenge:
  Given a two-dimensional array of integers,
  return the flattened version of the array
  with all the integers in the sorted (ascending) order.*/

export const flattenAndSort = (inputArray: number[][]): number[] => {
  return inputArray.flat().sort((a, b) => a - b);
};
