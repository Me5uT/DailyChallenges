const sortNumbers = (numbers: number[]) => {
  // dizinin zaten sıralanmış olduğunu kontrol etmek için flag
  let alreadySortedFlag: boolean = true;
  for (let index = 0; index < numbers.length; index++) {
    for (let index = 0; index < numbers.length; index++) {
      // array deki index ve bir sonraki elemanı karşılaştırıp büyükse yer değiştir
      if (numbers[index] > numbers[index + 1]) {
        alreadySortedFlag = false;

        const temp = numbers[index];
        numbers[index] = numbers[index + 1];
        numbers[index + 1] = temp;
      }
    }
  }

  console.log("sorted array = ", numbers);
  console.log(`is array already sorted ? ${alreadySortedFlag ? "Yes" : "No"}`);
};

// const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums: number[] = [2, 6, 5, 4, 7, 8, 9, 1, 3];
sortNumbers(nums);
