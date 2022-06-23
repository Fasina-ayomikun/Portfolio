import React from "react";
import styled from "styled-components";
import { MdComputer } from "react-icons/md";
import { projects } from "../data";
import image from "../images/kitty.png";
function ProjectList() {
  return (
    <Wrapper>
      <div className='section-container'>
        <div className='projects'>
          <h2>Projects \</h2>
          <MdComputer className='projects-icon' />
        </div>
        <div className='projects-info'>
          {projects.map(({ profile_url, url, github_url, name, id }) => {
            return (
              <div key={id} className='info'>
                <img src={url} alt='' />
                <div className='project-content'>
                  <h4>{name}</h4>
                  <div className='btns'>
                    <button type='button'>
                      <a href={profile_url} target='blank'>
                        Preview
                      </a>
                    </button>
                    <button type='button'>
                      <a href={github_url} target='blank'>
                        View Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* height: calc(100vh - 90px); */
  padding: 0 40px;
  margin: 0 auto;
  width: 100%;
  background-color: #343a40;

  .projects {
    margin: 0;
    display: flex;
    align-items: center;
    border-bottom: 2px dotted #ffbfa0;
    border-bottom-style: dashed;
    justify-content: space-between;
  }
  .projects-icon {
    font-size: 2.5rem;
    margin-bottom: 0;
    color: #ffbfa0;
  }
  h2 {
    color: var(--grey-300);
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .projects-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 60px 0;
    .info {
      border-radius: 10px;
      position: relative;
      height: 300px;
      box-shadow: 1px 1px 10px #ffbfa0;
      &:hover .project-content {
        visibility: visible;
        transition: 1s ease-in-out all;
      }
      img {
        height: 100%;
        width: 100%;

        border-radius: 10px;
      }
    }
  }
  .project-content {
    position: absolute;
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    h4 {
      text-align: center;
      text-transform: capitalize;
      font-weight: 600;
      color: var(--grey-400);
    }
    button {
      padding: 10px 15px;
      margin: 0 8px;
      border-radius: 5px;
      background-color: #ffbfa0;
      border: 0;
      a {
        color: var(--black);
        text-transform: capitalize;
        font-weight: 600;
      }
    }
  }
  button:hover {
    background-color: #fda677;
  }
  @media (max-width: 992px) {
    .projects-info {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .projects-info {
      grid-template-columns: 1fr;
    }
    padding: 0;
  }
`;
export default ProjectList;
