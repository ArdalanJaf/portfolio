import React, { useEffect, useState } from "react";
import Links from "./Links";
import { genCodeWords } from "../utils/codeWordGenerator";
import Toggle from "./darkMode/Toggler";
import { useDarkMode } from "./darkMode/useDarkMode";
import Arrows from "./arrows/Arrows";

function Intro() {
  const targetName = "ARDALAN AL-JAF";
  const [codeWordArr, setCodeWordArr] = useState(genCodeWords(targetName));
  const [index, setIndex] = useState(0);
  const [animatedName, setAnimatedName] = useState("");
  const [theme, themeToggler] = useDarkMode();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(index + 1);
      if (index < codeWordArr.length) {
        let current = codeWordArr[index];
        setAnimatedName(current);
      } else if (index > 33) {
        setIndex(0);
        setCodeWordArr(genCodeWords(targetName));
      } else {
        return;
      }
    }, 95);
    return () => clearInterval(id);
  }, [index, animatedName]);

  return (
    <section className="intro">
      <div>
        <h1>
          <span>{animatedName}</span> <br />
          FRONT END <br />
          ENGINEER
        </h1>
        <div className="linkContainer">
          <Links />
         
        </div>
      </div>
      <Arrows />
    </section>
  );
}

export default Intro;
