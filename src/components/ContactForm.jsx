import React, { useState } from "react";
import { API_URL } from "../config/API_URL";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../redux/types";
import JoiErrorNote from "./JoiErrorNote";
import MsgSentNotification from "./MsgNotification";

function ContactForm() {
  const joiErrors = useSelector((state) => state.joiErrors);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [messageSent, setMessageSent] = useState(false);

  // Send user-inputs to back-end.
  const sendFormData = async (payload) => {
    try {
      const result = await axios.post(API_URL + "/messaging", payload);
      console.log(result);
      if (result.data.status === 0) {
        alert("API error: " + result.data.error);
        // notify user that API is down, advise to email me.
      } else if (result.data.joiErrors) {
        console.log(result.data.joiErrors);
        dispatch({
          type: types.SET_JOI_ERRORS,
          payload: { joiErrors: result.data.joiErrors },
        });

        // notify user of errors
      } else {
        setMessageSent(true);
      }
    } catch (error) {
      // alert("API down " + error);
      console.log(error);
    }
  };

  return (
    <form
      className="contactForm animateOnScroll fadeUp"
      onInput={(e) => {
        dispatch({
          type: types.SET_FORM_DATA,
          payload: { label: e.target.id, value: e.target.value },
        });
      }}
    >
      <input type="text" name="name" id="name" placeholder="YOUR NAME" />
      {joiErrors.name && <JoiErrorNote inputName={"name"} />}

      <input type="email" name="email" id="email" placeholder="YOUR EMAIL" />
      {joiErrors.email && <JoiErrorNote inputName={"email"} />}

      <textarea
        className="textbox"
        name="message"
        id="message"
        rows="6"
        placeholder="YOUR MESSAGE"
      />
      {joiErrors.message && <JoiErrorNote inputName={"message"} />}

      <button
        className="submitButton hover"
        type="submit"
        name="submit"
        onClick={(e) => {
          e.preventDefault();
          setMessageSent(false);
          sendFormData(formData);
          dispatch({
            type: types.CLEAR_JOI_ERRORS,
          });
        }}
      >
        GET IN TOUCH
      </button>

      {messageSent && <MsgSentNotification />}
    </form>
  );
}

export default ContactForm;
