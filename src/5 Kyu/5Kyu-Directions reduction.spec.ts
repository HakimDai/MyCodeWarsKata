import {dirReduc} from './5Kyu-Directions reduction';

function dotest(arr: string[], expected: string[]) {
    expect(dirReduc(arr)).toEqual(expected);
}

describe("Fixed Tests", function() {
    it("dirReduc", function() {
        let a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
        dotest(a, ["WEST"])
        let b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
        dotest(b, [])
        let c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
        dotest(c, ["NORTH"])
        let u = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
        dotest(u, ["EAST", "NORTH"])
        let v = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
        dotest(v, ["NORTH", "EAST"])
        let t =["NORTH", "WEST", "SOUTH", "EAST"]
        dotest(t, ["NORTH", "WEST", "SOUTH", "EAST"])
    });
});

function randint(a: number, b: number) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
//...............
function dirReducSQP(arr: string[]){
  let pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
  let way = arr.join('');
  while( pat.test(way) ) way = way.replace(pat, '');
  return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}
function randomDir(k: number) {
    let res = [];
    for (let i = 0; i < k; i++) {
        let n = randint(0, 3);
        let x;
        if (n == 0) x = "NORTH"; 
        else if (n == 1) x = "SOUTH"; 
        else if (n == 2) x = "WEST";
        else x = "EAST";
        res.push(x);
    }
    return res;
}
//...............

describe("Random Tests", function() {
    it("Random tests", function() {
        for (let i = 0; i < 100; i++) {
            let testlen = randint(8, 20);
            let arr = randomDir(testlen);
            let sol = dirReducSQP(arr);
            //console.log(sol, "\n");
            dotest(arr, sol);
        }
    });
});