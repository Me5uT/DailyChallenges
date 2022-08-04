const isPalindrome = (word: string): boolean => {
  // parçala, ters çevir ve birleştir
  const reversedWord = word.split("").reverse().join("");

  return reversedWord == word;
};

const trimAndLowerCaseText = (str: string): string => {
  return str.trim().toLowerCase();
};

const reverseString = (str: string): string => {
  // V1
  let reversedTextArr: string[] = [];
  str.split("").forEach((letter, index) => {
    reversedTextArr[str.length - 1 - index] = letter;
  });
  console.log(reversedTextArr.join(""));
  return reversedTextArr.join("");

  // // V2
  // return str.split("").reverse().join("");
};

const reverseText = (text: string) => {
  // textin başındaki ve sondaki boşlukları kaldır, lower case yap
  const trimedAndLowerCaseText = trimAndLowerCaseText(text);
  //  kelime mi cümle mi kontrolü
  const isWord = trimedAndLowerCaseText.split(" ").length < 2;

  if (isWord) {
    // kelimelerin palindrome kontrolü
    const isWordPalindrome = isPalindrome(trimedAndLowerCaseText);

    if (isWordPalindrome) {
      console.log(
        `${trimedAndLowerCaseText}, bir kelimedir ve palindrome'dur.`
      );
    } else {
      const reversedWord = reverseString(trimedAndLowerCaseText);

      console.log(
        `${trimedAndLowerCaseText}, bir kelimedir ve tersi = ${reversedWord}'dir.`
      );
    }
  } else {
    // // V1
    // // text kelime değil ise; boşluklara göre parçala, her kelimeyi ters çevir, ve birleştir
    // const reversedText = trimedAndLowerCaseText
    //   .split(" ")
    //   .map((word) => word.split("").reverse().join(""))
    //   .join(" ");
    // console.log(
    //   `${trimedAndLowerCaseText}, bir kelime değildir ve tersi ${reversedText}'dir.`
    // );

    // // V2
    const reversedText = reverseString(trimedAndLowerCaseText);

    console.log(
      `${trimedAndLowerCaseText}, bir kelime değildir ve tersi = ${reversedText}'dir.`
    );
  }
};

reverseText("thIs is A sentEnce");
reverseText("this ");
reverseText(" this");
reverseText("AbbA");
