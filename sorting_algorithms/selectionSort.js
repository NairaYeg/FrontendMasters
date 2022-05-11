const numbers = [3, 5, 6, 2, 1];

const selectionSort = (items) => {
  for (let i = 0; i < items.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < items.length; j += 1) {
      if (items[min] > items[j]) {
        min = j
      }
    }

    if (items[min] !== items[i]) {
      const minElel = items[min];
      items[min] = items[i];
      items[i] = minElel
    }
  }

  return items;
}

selectionSort(numbers); // [1, 2, 3, 4, 5, 6]
