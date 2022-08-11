const numbers: number[] = [5, 3, 7, 8, 2, 1, 4];

// insertion sort
const insertionSort = (numbers: number[]) => {
  let j;

  for (let i = 1; i < numbers.length; i++) {
    let value = numbers[i];
    j = i - 1;

    while (j >= 0 && numbers[j] > value) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }
    numbers[j + 1] = value;
  }

  console.log("numbers", numbers);
};

insertionSort(numbers);
