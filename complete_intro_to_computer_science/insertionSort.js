function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j;

    for (j = i - 1; arr[j] > numberToInsert && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }

    numberToInsert = arr[j + 1];
  }

  return arr;
}

const arr = [5, 78, 89, 9, 23, 56];

console.log(insertionSort(arr));
