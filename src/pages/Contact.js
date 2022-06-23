import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

function Contact() {
  return (
    <Wrapper>
      <Navbar />
      <div className='div'>
        <Sidebar />
        <ContactForm />
      </div>
      <Footer />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .div {
    display: flex;

    align-items: center;
    justify-content: center;
  }
`;
export default Contact;
