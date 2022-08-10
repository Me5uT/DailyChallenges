const bblSort = (arr: number[]) => {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Print the sorted array
  console.log(arr);
};

const arr = [9, 8, 3, 7, 5, 6, 4, 1];
bblSort(arr);
