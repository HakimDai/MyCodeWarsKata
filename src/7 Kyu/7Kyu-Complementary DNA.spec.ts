import { Kata } from './7Kyu-Complementary DNA';

describe('dnaStrand', function () {
  it('Basic tests', function () {
    expect(Kata.dnaStrand('AAAA')).toBe('TTTT');
    expect(Kata.dnaStrand('ATTGC')).toBe('TAACG');
    expect(Kata.dnaStrand('GTAT')).toBe('CATA');
    expect(Kata.dnaStrand('AAGG')).toBe('TTCC');
    expect(Kata.dnaStrand('CGCG')).toBe('GCGC');
    expect(Kata.dnaStrand('ATTGC')).toBe('TAACG');
    expect(
      Kata.dnaStrand(
        'GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA'
      )
    ).toBe(
      'CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT'
    );
  });
  it('Random tests', function () {
    let base = ['A', 'C', 'G', 'T'];
    function randint(a: number, b: number) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }

    function DNASol(dna: string) {
      let res = '';
      for (let nuc = 0; nuc < dna.length; nuc++) {
        if (dna[nuc] == 'A') res += 'T';
        else if (dna[nuc] == 'T') res += 'A';
        else if (dna[nuc] == 'C') res += 'G';
        else res += 'C';
      }
      return res;
    }

    for (let _ = 0; _ < 40; _++) {
      let testdna = '';
      let testlen = randint(5, 30);
      for (let j = 0; j < testlen; j++) testdna += base[randint(0, 3)];
      expect(Kata.dnaStrand(testdna)).toBe(DNASol(testdna));
    }
  });
});
