import React, { useEffect, useState } from "react";
import { randomInt } from "../utils";

function Interests() {
  const [interest, setInterest] = useState("");

  const interests = [
    "Cycling to get places",
    "Motobikes to go fast!",
    "Deep conversations with strangers",
    "Role Playing Games",
    "Drawing nerdy space stuff",
    "Eating streetfood",
    "Being a home-chef's assistant",
    "My cat (daemon) Beau, RIP",
    "Being in competition ",
    "London parks at dusk",
  ];

  const randomSelector = (list) => {
    let currentInterest = interest;
    let listCopy = list.filter((item) => item !== currentInterest);
    let newInterest = listCopy[randomInt(listCopy.length)];
    setInterest(newInterest);
  };

  return (
    <div className="interests">
      <button onClick={() => randomSelector(interests)}>I enjoy:</button>
      <p>{interest}</p>
    </div>
  );
}

export default Interests;
