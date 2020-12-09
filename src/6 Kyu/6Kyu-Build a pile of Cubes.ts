// Your task is to construct a building which will be a pile of n cubes.
// The cube at the bottom will have a volume of n^3,
// the cube above will have volume of (n-1)^3
// and so on until the top which will have a volume of 1^3.
//
// You are given the total volume m of the building.
// Being given m can you find the number n of cubes you will have to build?
//
// The parameter of the function findNb (find_nb, find-nb, findNb)
// will be an integer m
// and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m
//     if such a n exists or -1 if there is no such n.
//
//     Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
// mov rdi, 1071225
// call find_nb            ; rax <-- 45
//
// mov rdi, 91716553919377
// call find_nb            ; rax <-- -1

let n = 0;
export function findNb(m: number): number {
  let result = 0;
  n++;
  const cube = Math.pow(n, 3);
  if (m - cube < 0) {
    n = 0;
    return -1;
  } else if (m - cube === 0) {
    result = n;
    n = 0;
    return result;
  } else {
    return findNb(m - cube);
  }
}
