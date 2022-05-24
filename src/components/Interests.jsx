import React, { useEffect, useState } from "react";
import { randomInt } from "../utils";

function Interests() {
  const [interest, setInterest] = useState("");

  const interests = [
    "Full-Metal Alchemists: Brotherhood",
    "Cycling to get places",
    "Motobikes to go fast!",
    "Spontanious parties.",
    "Deep conversations with strangers",
    "Role Playing Games",
    "Starting and finishing projects",
    "Drawing nerdy space stuff",
    "Eating streetfood",
    "Being a home-chef's assistant",
    "My cat (daemon) Beau, RIP",
    "London parks at dusk",
  ];

  const randomSelector = (list) => {
    let currentInterest = interest;
    console.log(interest);
    let listCopy = list.filter((item) => item !== currentInterest);
    console.log(listCopy);
    let newInterest = listCopy[randomInt(listCopy.length)];
    console.log(newInterest);
    setInterest(newInterest);
  };

  //   useEffect(() => {}, [interest]);

  return (
    <div className="interests">
      <button onClick={() => randomSelector(interests)}>I enjoy:</button>
      <p>{interest}</p>
    </div>
  );
}

export default Interests;
