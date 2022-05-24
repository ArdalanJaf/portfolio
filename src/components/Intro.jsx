import React, { useEffect, useState } from "react";
import Links from "./Links";
import { genCodeWords } from "../utils/codeWordGenerator";

function Intro() {
  const targetName = "ARDALAN AL-JAF";

  const [codeWordArr, setCodeWordArr] = useState(genCodeWords(targetName));
  const [index, setIndex] = useState(0);
  const [animatedName, setAnimatedName] = useState("");

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