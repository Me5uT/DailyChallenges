const findDifferences = (firstArray: number[], secondArray: number[]) => {
  let count = 0;
  let allNumbers: number[] = [...firstArray, ...secondArray];
  let sameNumbers: number[] = [];
  let differences: number[] = [];

  // 2 array icindeki ayni elemanlari bul
  for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    for (
      let sencondIndex = 0;
      sencondIndex < secondArray.length;
      sencondIndex++
    ) {
      if (firstArray[firstIndex] == secondArray[sencondIndex]) {
        sameNumbers.push(firstArray[firstIndex]);
        break;
      }
    }
  }

  for (let thirdIndex = 0; thirdIndex < allNumbers.length; thirdIndex++) {
    for (let index = 0; index < sameNumbers.length; index++) {
      if (allNumbers[thirdIndex] != sameNumbers[index]) {
        differences.push(allNumbers[thirdIndex]);
      }
    }
  }

  console.log("differences", differences);
  console.log("same numbers", sameNumbers);
};

const arr1 = [1, 2, 7, 5];
const arr2 = [5, 6, 7, 8, 9];
findDifferences(arr1, arr2);
