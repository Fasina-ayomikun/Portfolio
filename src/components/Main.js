import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Main() {
  const name = "Fasina Ayomikun";
  const [endstring, setEndString] = useState(name.length);
  useEffect(() => {
    setTimeout(() => {
      setEndString((oldString) => {
        let newString = oldString - 1;
        if (oldString === 0) {
          newString = name.length;
        }
        return newString;
      });
    }, 1000);
  }, [endstring]);
  return (
    <Wrapper className='info-container'>
      <div className='info section-container'>
        <p>I am </p>
        <h2>
          {name.substring(0, endstring)}
          <span className='cursor'>|</span>
        </h2>
        <p>
          I am a self taught frontend developer, a lady working towards
          significant self development, a passionate and dedicated web developer
          and programmer.
        </p>
        <button className='home-btn'>
          <Link to='/bio'>About me</Link>
        </button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  h2 {
    margin: 0;
    color: #ffbfa0;
    font-weight: 600;
    /* text-shadow: 1px 1px 3px #ccc; */
  }
  .info {
    text-align: center;
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .home-btn {
    padding: 10px 15px;
    border: 0;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
    background-color: #ffbfa0;

    a {
      color: #000;
      text-transform: capitalize;
    }
  }
  .home-btn:hover {
    background-color: var(--grey-800);
    transition: 0.5s ease-in-out all;
    a {
      color: #ffbfa0;
    }
  }
`;
export default Main;
