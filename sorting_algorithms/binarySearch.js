const numbers = [1, 2, 3, 4, 5, 6];

const findByVal = (arr, value) => {
  const size = arr.length;
  const middleIdx = Math.floor(size / 2)
  const middleElem = arr[middleIdx]; 

  if (arr.length === 0) {
    return false
  }
  
  if (value === middleElem) {
    return true;
  }

  if (value > middleIdx) {
    return findByVal(arr.slice(middleIdx), value)
  }

  return findByVal(arr.slice(0, middleIdx), value)
}

findByVal(numbers, 0);
