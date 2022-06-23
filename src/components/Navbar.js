import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaAlignJustify } from "react-icons/fa";
import image from "../images/me2.jpeg";
import Modal from "./Modal";
import { useAppProvider } from "../context";
function Navbar() {
  const { openSidebar, openModal } = useAppProvider();

  return (
    <>
      <Wrapper>
        <div className='nav-container'>
          <FaAlignJustify className='icon' onClick={openSidebar} />
          <ul className='links'>
            <li>
              <NavLink to='/' className='link' activeclassname='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/bio' className='link' activeclassname='active'>
                Bio
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='link' activeclassname='active'>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='link' activeclassname='active'>
                Contact
              </NavLink>
            </li>
          </ul>
          <img src={image} alt='my picture' onClick={openModal} />
        </div>
      </Wrapper>
      <Modal />
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  margin: 0;
  height: 80px;
  background-color: #ffbfa0;
  box-shadow: var(--shadow-1);
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    .link {
      margin-right: 10px;
      color: #555;
      text-transform: capitalize;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  .nav-container {
    max-width: var(--max-width);
    padding: 0 30px;

    margin: 0 auto;
    height: 100%;
  }
  .active {
    font-style: italic;
  }
  h4 {
    margin: 0;
  }
  .icon {
    font-size: 1.6rem;
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 60px;
    object-fit: cover;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--grey-900);
  }
  .icon {
    color: var(--grey-900);
  }
  @media (max-width: 768px) {
    .icon {
      display: block;
    }
    .links {
      display: none;
    }
    div {
      justify-content: space-between;
    }
  }
`;
export default Navbar;
