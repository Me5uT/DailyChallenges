const str = "asdffdg";
let reversedTextArr = "";

for (let i = 0; i < str.length; i++) {
  reversedTextArr = str[i] + reversedTextArr;
}

console.log(reversedTextArr);
