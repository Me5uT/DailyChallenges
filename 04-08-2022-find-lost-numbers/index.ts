const someNumbers: number[] = [1, 2, 14, 5, 7, 9];

const findLostNumbers = (numbers: number[]): void => {
  const lostNumbers: number[] = [];
  let allNumbers: number[] = [];

  // min den max a kadar bir döngüde array in içinde olmayan sayıları bul
  for (let i = Math.min(...numbers); i < Math.max(...numbers); i++) {
    if (!numbers.includes(i)) {
      lostNumbers.push(i);
    }
  }

  console.log("lostNumbers", lostNumbers);

  allNumbers = [...numbers, ...lostNumbers].sort((a, b) => {
    return a - b;
  });
  console.log("allNumbers", allNumbers);
};

findLostNumbers(someNumbers);
