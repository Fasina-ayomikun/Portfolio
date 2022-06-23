import React from "react";
import styled from "styled-components";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

function About() {
  return (
    <Wrapper>
      <Navbar />
      <div className='div'>
        <Sidebar />
        <AboutInfo />
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
export default About;
