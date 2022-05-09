import React from "react";
import { useSelector } from "react-redux";

function JoiErrorNote(props) {
  const joiErrors = useSelector((state) => state.joiErrors);
  return <p>{joiErrors[props.inputName]}</p>;
}

export default JoiErrorNote;
