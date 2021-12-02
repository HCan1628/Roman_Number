// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const intToRoman = (num) => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (key in map) {
    const repeatCounter = Math.floor(num / map[key]);

    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }

    num %= map[key];

    if (num === 0) return result;
  }

  return result;
};
console.log(intToRoman("21"));

const input = document.getElementById("input");
const result = document.getElementById("result");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  let userNumber = +input.value;
  console.log(userNumber);
  // console.log(typeof(userNumber));
  if (userNumber > 3000) {
    alert("Please enter smaller number than 3000");
    input.value = "";
  } else if (userNumber == "") {
    alert("Please enter a number");
  } else {
    result.innerHTML = convert(userNumber);
  }
});
// Second Way;
// const convert = (userNumber) => {
//     let romanToNum = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     };

//     let romanNumber = "";
//     for(let key in romanToNum){
//         // console.log("keys: ", key);
//         // console.log("values: ",romanToNum[key]);
//         while(userNumber >= romanToNum[key]){
//             romanNumber += key;
//             userNumber -= romanToNum[key];
//         }
//     };

//     return `Our Roman Numeral is : <br> ${romanNumber}`
