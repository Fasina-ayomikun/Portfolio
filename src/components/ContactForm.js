import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import { FaRegEnvelope } from "react-icons/fa";

// export const ContactUs = () => {
// };
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t78vsfg",
        "template_o6b0e4o",
        form.current,
        "JZyuDV0Kihz92g5_Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Wrapper>
      <div className='section-container contact-form'>
        <div className='contact'>
          <h2>Contact me \</h2>
          <FaRegEnvelope className='contact-icon' />
        </div>
        <form ref={form} className='form' onSubmit={sendEmail}>
          <div className='form-container'>
            <div className='inputs'>
              <label htmlFor='first-name'>First Name :</label>
              <input type='text' id='first-name' name='user_name' />
            </div>
            <div className='inputs'>
              <label htmlFor='last-name'>last Name :</label>
              <input type='text' id='last-name' name='user_name' />
            </div>
            <div className='inputs email'>
              <label htmlFor='email'>Email :</label>
              <input type='email' required id='email' name='user_email' />
            </div>
            <div className='inputs msg'>
              <label htmlFor='msg'>Message :</label>
              <textarea type='text' id='msg' name='message' />
            </div>
            <button className='submit-btn' type='submit'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 40px;
  margin: 0 auto;
  width: 100%;
  background-color: #343a40;
  .contact {
    text-transform: capitalize;
    margin: 0;
    display: flex;
    align-items: center;
    border-bottom: 2px dotted #ffbfa0;
    border-bottom-style: dashed;
    justify-content: space-between;
  }
  h2 {
    color: var(--grey-300);
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .contact-icon {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  .form {
    width: 100%;

    height: calc(100vh - 180px);
  }
  .form-container {
    /* background-color: red; */
    border-radius: 20px;
    display: grid;
    margin: 60px auto;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    width: 70%;
    column-gap: 20px;
    height: 100%;
    padding: 30px;
  }
  label {
    font-size: 1.4rem;
    display: block;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--grey-700);
    text-transform: capitalize;
  }
  input,
  textarea {
    background-color: transparent;
    border: 0;
    margin-top: 5px;
    padding: 15px 15px;
    width: 100%;
    color: #ffbfa0;
    letter-spacing: 2px;
    font-size: 1.3rem;
    border-bottom: 2px solid #ffbfa0;
  }
  textarea {
    max-height: 100px;
    width: 100%;
    max-width: 100%;
  }
  .email {
    grid-column: span 2/3;
    /* background-color: blue; */
  }
  .msg {
    grid-column: span 2/3;
  }
  .submit-btn {
    grid-column: span 2/3;
    border: 0;
    padding: 15px;
    border-radius: 10px;
    text-transform: capitalize;
    font-size: 1.5rem;
    background-color: var(--grey-900);
    color: #ffbfa0;
    font-weight: 600;
    &:hover {
      color: var(--grey-900);
      background-color: #ffbfa0;
      transition: 0.5s ease-in-out;
    }
  }
  @media (max-width: 768px) {
    .form {
      height: auto;
    }
    .form-container {
      row-gap: 20px;
      grid-template-columns: 1fr;
    }
    .email {
      grid-column: auto;
    }
    .msg {
      grid-column: auto;
    }
    .submit-btn {
      grid-column: auto;
    }
  }
  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;
export default ContactForm;
