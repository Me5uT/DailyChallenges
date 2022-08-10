const numbers: number[] = [5, 3, 7, 8, 2, 1, 4];

// insertion sort
const insertionSort = (arr: number[]) => {
  let key;
  let j;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  console.log("arr", arr);
};

insertionSort(numbers);
