let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const isSuperset = (setA, setB) => {
  for (let item of setB.values()) {
    if (!setA.has(item)) {
      return false;
    }
  }

  return true;
};

isSuperset(setA, setB);
