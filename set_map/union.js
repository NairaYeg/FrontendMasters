let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

// add
// has
// values

function union(setA, setB) {
  let unionSet = new Set(setA);

  for (let item of setB.values()) {
    unionSet.add(item);
  }

  return unionSet;
}

union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
