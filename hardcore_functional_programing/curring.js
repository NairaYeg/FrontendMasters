const curry = (f) => (x) => (y) => f(x, y);

const getOdds = (n) => n % 2 === 0;

const currying = curry((f, arr) => arr.filter(f));

const arr = [4, 5, 7, 8, 9];

const result = currying(getOdds)(arr);

console.log("result", result);
