const selection = (numbers: number[]) => {
  // tum listeyi gez
  for (let firstIndex = 0; firstIndex < numbers.length; firstIndex++) {
    let lowestNumberIndex = firstIndex;

    // array icindeki en kucuk sayiyi bul
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < numbers.length;
      secondIndex++
    ) {
      if (numbers[secondIndex] < numbers[lowestNumberIndex]) {
        lowestNumberIndex = secondIndex;
      }
    }

    // en kucuk sayi
    if (lowestNumberIndex !== firstIndex) {
      let temp;
      temp = numbers[firstIndex];
      numbers[firstIndex] = numbers[lowestNumberIndex];
      numbers[lowestNumberIndex] = temp;
    }
  }
  return numbers;
};

const unSortedArray = [9, 8, 3, 7, 5, 6, 4, 1];
console.log("unSortedArray", unSortedArray);
const sortedArr = selection(unSortedArray);
console.log("sortedArr", sortedArr);
