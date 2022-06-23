import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className='footer-container'>
        <h5>
          Copyright &copy; {new Date().getFullYear()}. All rights Reserved
        </h5>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  margin: 0;
  height: 80px;
  background-color: #ffbfa0;
  border-top: 2px solid #e2dddd;
  .footer-container {
    max-width: var(--max-width);
    padding: 0px 0;
    margin: 0 auto;
    height: 100%;
  }
  h5 {
    margin: 0;
    text-align: center;
    color: var(--grey-900);
    margin: 0 auto;
    text-transform: capitalize;
  }
  .icon {
    font-size: 1.6rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default Footer;
