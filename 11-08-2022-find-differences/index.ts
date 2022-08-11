// V1
const findDifferences = (firstArray: number[], secondArray: number[]) => {
  let sameNumbers: number[] = [];
  let differences: number[] = [];

  // 2 array icindeki ayni elemanlari bul
  for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    let isSameNumberFlag: boolean = false;

    for (
      let sencondIndex = 0;
      sencondIndex < secondArray.length;
      sencondIndex++
    ) {
      // if numbers are same
      if (firstArray[firstIndex] == secondArray[sencondIndex]) {
        sameNumbers.push(firstArray[firstIndex]);
        isSameNumberFlag = true;
        break;
      }
    }

    // if numbers are not same
    if (!isSameNumberFlag) {
      differences.push(firstArray[firstIndex]);
    }
  }

  console.log("differences", differences);
  console.log("same numbers", sameNumbers);
};

const arr1 = [1, 2, 7, 5, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
// findDifferences(arr1, arr2);

// V2
const findDifferences2 = (firstArray: number[], secondArray: number[]) => {
  let allNumbers: number[] = [...firstArray, ...secondArray];
  let sameNumbers: number[] = [];
  let differences: number[] = [];

  let count = 0;
  console.log("allnumbers", allNumbers);

  for (let firstIndex = 0; firstIndex < allNumbers.length; firstIndex++) {
    let isSameNumberFlag: boolean = false;

    for (let secondIndex = 0; secondIndex < allNumbers.length; secondIndex++) {
      if (
        firstIndex != secondIndex &&
        allNumbers[firstIndex] == allNumbers[secondIndex]
      ) {
        sameNumbers.push(allNumbers[firstIndex]);
        isSameNumberFlag = true;
        break;
      }
    }

    if (!isSameNumberFlag) differences.push(allNumbers[firstIndex]);
  }

  // unique elements in same numbers
  for (let i = 0; i < sameNumbers.length; i++) {
    for (let j = i + 1; j < sameNumbers.length; j++) {
      if (sameNumbers[i] === sameNumbers[j]) {
        sameNumbers.splice(j, 1);
      }
    }
  }

  console.log("sameNumbers", sameNumbers, "differences", differences);
};

findDifferences2(arr1, arr2);
