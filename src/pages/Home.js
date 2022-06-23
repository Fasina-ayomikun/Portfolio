import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <div className='div'>
        <Sidebar />
        <Main />
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
export default Home;
