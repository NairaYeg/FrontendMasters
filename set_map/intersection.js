let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4]);

const intersection = (setA, setB) => {
  const _intersection = new Set();

  for (let item of setA.values()) {
    if (setB.has(item)) {
      _intersection.add(item);
    }
  }

  return _intersection;
};

intersection(setA, setC); // => Set [3, 4]
