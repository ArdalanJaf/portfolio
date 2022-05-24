export function genCodeWords(target) {
  let codeLetters = "#$%&@§10" + target.replace(" ", "").replace("-", "");
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
  for (let i = 0; i < 2; i++) {
    codeArr.unshift("");
  }

  // console.log(codeArr);
  return codeArr;
}
