const selection = (arr: number[]) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        // compare element with the reset of other element
        // swap the valuse from smallest to gretest
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

const arr = [9, 8, 3, 7, 5, 6, 4, 1];
const sortedArr = selection(arr);
console.log("sortedArr", sortedArr);
