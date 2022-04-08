import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import "./contact.css"


const ContactForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setmessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3001/api/insert", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    }).then(()=> {
      console.log('succesful insert')
    })
  };

  return (
    <>
      <form className="contact-container">
        <h1 className="title">First Name</h1>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        />
        <h1 className="title">Last Name</h1>
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />
        <h1 className="title">E-mail</h1>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <h1 className="title">Phone Number</h1>
        <input
          type="tel"
          name="phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={(e) => {
            setphoneNumber(e.target.value);
          }}
        />
        <h1 className="title">Message</h1>
        <input
          type="text"
          name="message"
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
