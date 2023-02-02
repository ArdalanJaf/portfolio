import React, { useState, useEffect } from "react";
import { API_URL } from "../config/API_URL";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../redux/types";
import JoiErrorNote from "./JoiErrorNote";
import MsgSentNotification from "./MsgNotification";
import { Orbit } from "@uiball/loaders";

function ContactForm() {
  const joiErrors = useSelector((state) => state.joiErrors);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Send user-inputs to back-end.
  const sendFormData = async (payload) => {
    setIsLoading(true);
    try {
      const result = await axios.post(API_URL + "/messaging", payload);
      // console.log("results: ", result);
      document.getElementById("contactForm").reset();

      // notify user that API is down, advise to email me.
      if (result.data.status === 0) {
        console.log(result);
        setIsLoading(false);

        alert("API error: " + result.data.error);

        // notify user of errors
      } else if (result.data.joiErrors) {
        setIsLoading(false);

        dispatch({
          type: types.SET_JOI_ERRORS,
          payload: { joiErrors: result.data.joiErrors },
        });

        // notify user message recieved
      } else {
        setIsLoading(false);
        dispatch({ type: types.CLEAR_FORM_DATA });
        setMessageSent(true);
      }
    } catch (error) {
      setIsLoading(false);
      alert("API down " + error);
      // console.log(error);
      // console.log("more specific: ", error.response.data);
    }
  };

  useEffect(() => {
    if (
      (messageSent && formData.name.length) ||
      formData.email.length ||
      formData.message.length
    ) {
      setMessageSent(false);
    }
  }, [formData]);

  return (
    <form className="contactForm animateOnScroll fadeUp" id="contactForm">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your name..."
        value={formData.name}
        onInput={(e) => {
          dispatch({
            type: types.SET_FORM_DATA,
            payload: { label: e.target.id, value: e.target.value },
          });
        }}
      />
      {joiErrors.name && <JoiErrorNote inputName={"name"} />}
      <label hidden htmlFor="name">
        Your name.
      </label>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email..."
        value={formData.email}
        onInput={(e) => {
          dispatch({
            type: types.SET_FORM_DATA,
            payload: { label: e.target.id, value: e.target.value },
          });
        }}
      />
      {joiErrors.email && <JoiErrorNote inputName={"email"} />}
      <label hidden htmlFor="email">
        Your email address.
      </label>

      <textarea
        className="textbox"
        name="message"
        id="message"
        rows="8"
        placeholder="Your message..."
        value={formData.message}
        onInput={(e) => {
          dispatch({
            type: types.SET_FORM_DATA,
            payload: { label: e.target.id, value: e.target.value },
          });
        }}
      />
      <label hidden htmlFor="message">
        Your message.
      </label>
      {joiErrors.message && <JoiErrorNote inputName={"message"} />}

      {!messageSent ? (
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
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Orbit size={20} color="#000" />
            </div>
          ) : (
            "GET IN TOUCH"
          )}
        </button>
      ) : (
        <MsgSentNotification />
      )}
    </form>
  );
}

export default ContactForm;
