function findUniqueItems<T>(numbers: T[]) {
  let count: number = 0;
  let uniqueNumbers: T[] = [];

  // verilen dizinin ilk elemanını doğrudan ekle
  uniqueNumbers.push(numbers[0]);

  //   verilen dizinin uzunlugu kadar döngüde kal - ilk eleman hariç
  for (let firstIndex = 1; firstIndex < numbers.length; firstIndex++) {
    let isUnique: boolean = false;

    for (
      let secondIndex = 0;
      secondIndex < uniqueNumbers.length;
      secondIndex++
    ) {
      count++;
      console.log("worked", count);

      if (numbers[firstIndex] != uniqueNumbers[secondIndex]) {
        isUnique = true;
      } else {
        isUnique = false;
        break;
      }
    }

    if (isUnique) uniqueNumbers.push(numbers[firstIndex]);
  }

  console.log("uniqueNumbers", uniqueNumbers);
}

const nums: number[] = [1, 2, 2, 3, 3, 7, 5, 5, 2];
const strings: string[] = ["a", "b", "c", "c", "d", "e"];

findUniqueItems(strings);
findUniqueItems(nums);
