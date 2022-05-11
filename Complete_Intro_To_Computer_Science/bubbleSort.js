function bubbleSort(arr) {
  let isSwiped = false;
  for (let i = 0; i < arr.length; i++) {
    isSwiped = false;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        isSwiped = true;
      }
    }
    if (!isSwiped) break;
  }

  return arr;
}

const arr = [4, 5, 67, 8, 90, 0, 1, 90];

console.log(bubbleSort(arr));
