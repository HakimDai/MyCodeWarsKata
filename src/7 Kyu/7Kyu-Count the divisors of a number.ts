export function divisors(n: number) {
    let x = 1;
    let count = 0;
    while (x <= n) {
        if (n % x === 0) {
            count++;
            x++;
        } else {
            x++;
        }
    }
    return count;
}
