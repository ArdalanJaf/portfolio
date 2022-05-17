import React, { useEffect, useState, useRef } from "react";
import Links from "./Links";
// import animateWord from "../animateWord";

function Intro() {
  const targetName = "ARDALAN AL-JAF";

  // const [codeWordArr, setCodeWordArr] = useState(genCodeWords(targetName));
  // const [index, setIndex] = useState(0);
  const [animatedName, setAnimatedName] = useState("");

  function genCodeWords(target) {
    let codeLetters = "!#£$%&@*?+§10" + target;
    let codeArr = [""];
    function randomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const crackCode = (ting) => {
      let lastWord = codeArr[codeArr.length - 1];
      if (lastWord !== ting) {
        let codeWord = "";
        // create letters to form code word
        for (let n = 0; n < ting.length; n++) {
          codeWord +=
            codeArr.length > 1 && lastWord[n] === target[n]
              ? target[n]
              : codeLetters[randomInt(codeLetters.length)];
        }
        codeArr.push(codeWord);
        return crackCode(ting);
      } else {
        return console.log(codeArr);
      }
    };

    crackCode("ARDALAN AL-JAF");
  }
  genCodeWords("ARDALAN AL-JAF");

  //   // for each letter in final word
  //   for (let i = 0; i < target.length; i++) {
  //     let codeWord = "";
  //     // create letters to form code word
  //     for (let n = 0; n <= i; n++) {
  //       codeWord +=
  //         codeArr.length > 1 && codeArr[i - 1][n] === target[n]
  //           ? target[n]
  //           : codeLetters[randomInt(codeLetters.length)];
  //     }
  //     codeArr.push(codeWord);
  //   }
  //   codeArr.push(target);
  //   // console.log(codeArr);
  //   return codeArr;
  // }

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     // console.log(index);
  //     setIndex(index + 1);
  //     if (index < targetName.length + 2) {
  //       let current = codeWordArr[index];
  //       setAnimatedName(current);
  //     } else if (index > 34) {
  //       setIndex(0);
  //       setCodeWordArr(genCodeWords(targetName));
  //       console.log(codeWordArr);
  //     } else {
  //       console.log("pausing");
  //     }
  //   }, 100);
  //   return () => clearInterval(id);
  // }, [index, animatedName]);

  // console.log(animatedName);

  return (
    <section className="intro">
      <div>
        <h1>
          {animatedName} <br />
          FULL-STACK <br />
          WEB DEVELOPER
        </h1>
        <Links />
      </div>
      {/* <div>
        <p>WORK</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div> */}
    </section>
  );
}

export default Intro;
