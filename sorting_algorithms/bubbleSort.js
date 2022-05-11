const numbers = [3, 5, 6, 2, 1];

const bubbleSort = (items) => {
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i] > items[j]) {
        const temp = items[j];
        items[j] = items[i]
        items[i] = temp;
      }
    }
  }

  return items;
}

bubbleSort(numbers); // [1, 2, 3, 4, 5, 6]
