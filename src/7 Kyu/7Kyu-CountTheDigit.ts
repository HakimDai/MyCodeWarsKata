// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...)
// the function taking n and d as parameters and returning this count.

export class G964 {
  public static nbDig(n: number, d: number): number {
    let result = 0;
    let i = 0;
    const length = n + 1;
    while (i < length) {
      const squarredValue = (i * i).toString().split('');
      if (squarredValue.some((value) => value === d.toString())) {
        result += squarredValue.filter((value) => value === d.toString())
          .length;
      }
      i++;
    }
    return result;
  }
}
