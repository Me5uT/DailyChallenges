const numbers: number[] = [5, 3, 7, 8, 2, 1, 4];

// V1 Quick Sort
const quickSort = (numbers: number[]) => {
  // array tek eleman ise array i don
  if (numbers.length == 1) return numbers;

  // son elemanı pivot olarak belirle ve array i pivot a göre ayır
  const pivot: number = numbers[numbers.length - 1];
  let leftArray: number[] = [];
  let rightArray: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) {
      leftArray.push(numbers[i]);
    } else {
      rightArray.push(numbers[i]);
    }
  }
  console.log(leftArray, "leftArray");
  console.log(rightArray, "rightArray");
  console.log(pivot, "pivot");

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot];
  } else {
    return [pivot, ...quickSort(rightArray)];
  }
};

const sortedNumbers = quickSort(numbers);
console.log("sortedNumbers", sortedNumbers);
