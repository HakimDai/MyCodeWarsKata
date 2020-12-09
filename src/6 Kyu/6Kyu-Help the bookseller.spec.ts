import { G964 } from './6Kyu-Help the bookseller';

function testing(listOfArt: string[], listOfCat: string[], expected: string) {
  expect(G964.stockList(listOfArt, listOfCat)).toBe(expected);
}

describe('Fixed Tests', function () {
  it('Basic tests stockList', function () {
    let b: string[], c: string[], res: string;
    b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    c = ['A', 'B', 'C', 'D'];
    res = '(A : 0) - (B : 1290) - (C : 515) - (D : 600)';
    testing(b, c, res);

    b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    c = ['A', 'B'];
    res = '(A : 200) - (B : 1140)';
    testing(b, c, res);

    b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
    c = ['A', 'B', 'C', 'W'];
    res = '(A : 0) - (B : 114) - (C : 70) - (W : 0)';
    testing(b, c, res);

    b = [
      'ROXANNE 102',
      'RHODODE 123',
      'BKWRKAA 125',
      'BTSQZFG 239',
      'DRTYMKH 060',
    ];
    c = ['B', 'R', 'D', 'X'];
    res = '(B : 364) - (R : 225) - (D : 60) - (X : 0)';
    testing(b, c, res);

    b = [];
    c = ['B', 'R', 'D', 'X'];
    res = '';
    testing(b, c, res);

    b = [
      'ROXANNE 102',
      'RHODODE 123',
      'BKWRKAA 125',
      'BTSQZFG 239',
      'DRTYMKH 060',
    ];
    c = [];
    res = '';
    testing(b, c, res);

    b = [
      'ROXANNE 102',
      'RHODODE 123',
      'BKWRKAA 125',
      'BTSQZFG 239',
      'DRTYMKH 060',
    ];
    c = ['U', 'V', 'R'];
    res = '(U : 0) - (V : 0) - (R : 225)';
    testing(b, c, res);
  });
});
