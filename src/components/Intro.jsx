import React, { useEffect, useState, useRef } from "react";
import Links from "./Links";

function Intro() {
  const targetName = "ARDALAN AL-JAF";

  const [codeWordArr, setCodeWordArr] = useState(genCodeWords(targetName));
  const [index, setIndex] = useState(0);
  const [animatedName, setAnimatedName] = useState("");

  function genCodeWords(target) {
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

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1);
      if (index < codeWordArr.length) {
        let current = codeWordArr[index];
        setAnimatedName(current);
      } else if (index > 30) {
        setIndex(0);
        setCodeWordArr(genCodeWords(targetName));
      } else {
        return;
      }
    }, 100);
    return () => clearInterval(id);
  }, [index, animatedName]);

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
