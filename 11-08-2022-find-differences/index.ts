// V1
const findDifferences = (firstArray: number[], secondArray: number[]) => {
  let sameNumbers: number[] = [];
  let inJustFirstArray: number[] = [];
  let inJustSecondArray: number[] = [];

  // 1. arrayde olup 2. arrayde olmayanlari ve ayni sayilari bulmak icin
  for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    let isSameNumberFirstFlag: boolean = false;

    for (
      let sencondIndex = 0;
      sencondIndex < secondArray.length;
      sencondIndex++
    ) {
      // if numbers are same
      if (firstArray[firstIndex] == secondArray[sencondIndex]) {
        sameNumbers.push(firstArray[firstIndex]);
        isSameNumberFirstFlag = true;
        break;
      }
    }

    // if numbers are not same
    if (!isSameNumberFirstFlag) {
      inJustFirstArray.push(firstArray[firstIndex]);
    }
  }

  //   -----------------------------------------------

  // 2. arrayde olup 1. arrayde olmayanlari bulmak icin
  for (let i = 0; i < secondArray.length; i++) {
    let isSameNumberSecondFlag: boolean = false;

    for (let j = 0; j < firstArray.length; j++) {
      // if numbers are same
      if (firstArray[j] == secondArray[i]) {
        isSameNumberSecondFlag = true;
        break;
      }
    }

    // if numbers are not same
    if (!isSameNumberSecondFlag) {
      inJustSecondArray.push(secondArray[i]);
    }
  }

  console.log("inJustFirstArray", inJustFirstArray);
  console.log("inJustSecondArray", inJustSecondArray);

  console.log("same numbers", sameNumbers);
};

const arr1 = [1, 2, 7, 5, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
findDifferences(arr1, arr2);
