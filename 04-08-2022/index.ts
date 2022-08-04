const someNumbers: number[] = [1, 2, 14, 5, 7, 9];

const findLostNumbers = (numbers: number[]): void => {
  const lostNumbers: number[] = [];
  let min: number = 999;
  let max: number = 0;

  // // array in içindeki sayıların min ve max ı bul
  // V1
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }

  // // V2
  //   numbers.forEach((num: number) => {
  //     if (num > max) max = num;
  //     if (num < min) min = num;
  //   });

  console.log("min", min, "max", max);

  // min den max a kadar bir döngüde array in içinde olmayan sayıları bul
  for (let i = min; i < max; i++) {
    if (!numbers.includes(i)) {
      lostNumbers.push(i);
    }
  }

  console.log("lostNumbers", lostNumbers);
};

findLostNumbers(someNumbers);
