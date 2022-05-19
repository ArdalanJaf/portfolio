// const animateWord = (word) => {
//   let codeLetters = "!#£$%&@*?+§-" + word;
//   function randomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   if (ting.length < word.length) {
//     let code = "";
//     for (let n = 0; n <= ting.length; n++) {
//       if (ting[n] === word[n]) {
//         code += word[n];
//       } else {
//         code += codeLetters[randomInt(codeLetters.length)];
//       }
//     }
//     ting = code;
//     console.log(ting);
//     return animateWord(word);
//   } else {
//     ting = word;
//     console.log(ting);
//     return;
//   }

//   // for (let i = 0; i < word.length; i++) {
//   // let code = "";
//   // for (let n = 0; n <= length; n++) {
//   //   code += codeLetters[randomInt(codeLetters.length)];
//   // }
//   // arr.push(code);
//   // return code;
//   // }
//   // arr.push(word);
//   // console.log(arr);
//   // return arr
// };

// // let ting = "";
// // animateWord("ARDALAN AL-JAF");
// // console.log("variable = " + ting);

// function genCodeWords(target) {
//   let codeLetters = "!#£$%&@*?+§-" + target;
//   let codeArr = [];
//   function randomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   // for each letter in final word
//   for (let i = 0; i < target.length - 1; i++) {
//     let codeWord = "";
//     // create letters to form code word
//     for (let n = 0; n <= i; n++) {
//       codeWord +=
//         codeArr.length > 0 && codeArr[i - 1][n] === target[n]
//           ? target[n]
//           : codeLetters[randomInt(codeLetters.length)];
//       // if (codeArr.length > 0 && codeArr[i - 1][n] === target[n]) {
//       //   codeWord += target[n];
//       // } else {
//       //   codeWord += codeLetters[randomInt(codeLetters.length)];
//       // }
//     }
//     codeArr.push(codeWord);
//   }
//   codeArr.push(target);
//   return codeArr;
// }

// console.log(genCodeWord("ARDALAN AL-JAF"));

// // let arr = ["yp", "hello"];
// // console.log(arr[1]);

// // export default animateWord;

// //set timeout -> use Class-based first

function genCodeWords(target) {
  let codeLetters = "#$%&@*+§10" + target.replace(" ", "");
  let codeArr = [];
  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
  // for each letter in final word
  for (let i = 0; i < target.length; i++) {
    let codeWord = "";
    // create letters to form code word
    for (let n = 0; n < i; n++) {
      codeWord +=
        codeArr.length > 1 &&
        (codeArr[i - 1][n] === target[n] || target.indexOf(" ") === n)
          ? target[n]
          : codeLetters[randomInt(codeLetters.length)];
    }
    codeArr.push(codeWord);
  }
  codeArr.push(target);

  // for pause on empty name
  for (let i = 0; i < 5; i++) {
    codeArr.unshift("");
  }

  console.log(codeArr);
  return codeArr;
}

genCodeWords("ARDALAN AL-JAF");
