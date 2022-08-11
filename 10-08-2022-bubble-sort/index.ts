const sortNumbers = (numbers: number[]) => {
  let a = 0;
  for (let index = 0; index < numbers.length; index++) {
    // dizinin zaten sıralanmış olduğunu kontrol etmek için flag
    let alreadySortedFlag: boolean = true;
    for (let secondIndex = 0; secondIndex < numbers.length - 1; secondIndex++) {
      // array deki index ve bir sonraki elemanı karşılaştırıp büyükse yer değiştir
      if (numbers[secondIndex] > numbers[secondIndex + 1]) {
        alreadySortedFlag = false;

        const temp = numbers[secondIndex];
        numbers[secondIndex] = numbers[secondIndex + 1];
        numbers[secondIndex + 1] = temp;
      }
      a++;
      console.log("sortNumbers ~ a", a);
    }

    if (alreadySortedFlag) {
      console.log(`is array already sorted ? "Yes" `);
      break;
    }
  }

  console.log("sorted array = ", numbers);
};

// const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums: number[] = [2, 6, 5, 4, 3, 1, 7, 8, 9];
// console.log("nums", nums[9]);

sortNumbers(nums);
