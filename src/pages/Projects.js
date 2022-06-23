import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import Sidebar from "../components/Sidebar";

function Projects() {
  return (
    <Wrapper>
      <Navbar />
      <div className='div'>
        <Sidebar />
        <ProjectList />
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
export default Projects;
