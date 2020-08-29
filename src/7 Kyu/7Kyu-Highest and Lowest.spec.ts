import { Kata } from './7Kyu-Highest and Lowest';

describe("highAndLow", function() {
    it("should pass some fixed tests", function() {
        expect(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
        expect(Kata.highAndLow("10 2 -2 -10")).toBe("10 -10");
        expect(Kata.highAndLow("1 -1")).toBe("1 -1");
        expect(Kata.highAndLow("1 1")).toBe("1 1");
        expect(Kata.highAndLow("-1 -1")).toBe("-1 -1");
        expect(Kata.highAndLow("1 -1 0")).toBe("1 -1");
        expect(Kata.highAndLow("1 1 0")).toBe("1 0");
        expect(Kata.highAndLow("-1 -1 0")).toBe("0 -1");
        expect(Kata.highAndLow("42")).toBe("42 42");
    });

    it("should pass some random tests", function() {
        let t = 100, rnd = Math.random;
        while(t--){
            let min = ~~(rnd()*1e4)-5e3,
                max = min+3e3+~~(rnd()*100),
                rr = [], exp = max+" "+min;
            for( let i=1; i< 20; i++ ) rr.push(min+~~(rnd()*3e3));

            rr = rr.slice(10).concat([min,max]).concat(rr.slice(0,10));
            let rs = rr.sort(function(){return rnd()<.5 ? 1:-1 }).join(" ");

            expect(Kata.highAndLow(rs)).toBe(exp);
        }
    });
});
