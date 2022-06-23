import React from "react";
import styled from "styled-components";
import { skills } from "../social-icon";
import { BsFillPersonLinesFill } from "react-icons/bs";
import image from "../images/me.jpeg";
function AboutInfo() {
  return (
    <Wrapper>
      <div className='infos-content section-container'>
        <div className='person'>
          <h2>About Me \</h2>
          <BsFillPersonLinesFill className='person-icon' />
        </div>

        <div className='infos'>
          <div className='info others'>
            <h4>A Frontend web developer</h4>
            <p>
              I am a self taught frontend developer, a lady working towards
              significant self development, a passionate and dedicated web
              developer and programmer.
            </p>
            <p>
              “A designer knows he has achieved perfection not when there is
              nothing left to add, but when there is nothing left to take away”
              - Antonie De-Saint Exupery I am currently skilled in HTML,CSS and
              JavaScript and i working towards incremental knowledge and skill
              acquisition in web development and other interesting programming
              languages.
            </p>
          </div>
          <div className='info about-info'>
            {/* <img src={image} alt='my picture' /> */}
            <h4>Personal Information</h4>
            <p>
              <span>Name</span> : Fasina Ayomikun
            </p>
            <p>
              <span>Email</span> : ayomikunfasina240@gmail.com
            </p>

            <p>
              <span>Residence</span> : Oyo state,Nigeria
            </p>
            <p>
              <span>Phone</span> : (+234) 816 967 9471
            </p>
          </div>
        </div>
        <div className='info skills'>
          <h4>Skills</h4>

          <div className='skills-infos'>
            {skills.map(({ id, icon, stars, info, name }) => {
              return (
                <div key={id} className='skill'>
                  {icon}
                  <h5>
                    {name} : {stars}
                  </h5>
                  <p>{info}</p>
                </div>
              );
            })}
          </div>
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
  .infos-content {
    margin: 0 auto;
  }
  .infos {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    column-gap: 20px;
    justify-content: center;
  }
  .person {
    margin: 0;
    color: var(--grey-300);
    display: flex;
    align-items: center;
    border-bottom: 2px dashed #ffbfa0;

    justify-content: space-between;
  }
  .person-icon {
    font-size: 2.5rem;
    margin-bottom: 0;
  }

  .skills-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    margin-top: 60px;
  }
  .skills h4 {
    padding: 20px 0;
    font-size: 2rem;
  }
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 2.4rem;
    color: var(--grey-300);
  }
  .skill {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 4.5rem;
      margin-bottom: 0;
    }
    h5 {
      margin: 5px 0;
    }
    p {
      text-align: center;
    }
  }
  p,
  h4 {
    text-align: start;
  }
  h4 {
    color: #ffbfa0;
  }
  p {
    color: #daf5ff;
  }
  .info {
    width: 100%;
    padding: 0px;
    height: 100%;
    background-color: #343a40;
    border-radius: 20px;
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 10px 1px rgba(0, 0, 0, 0.6); */
  }
  .img-container {
    position: relative;
    height: 500px;
  }
  img {
    display: block;
    object-fit: cover;
    /* position: absolute; */
    /* bottom: -200px; */
    border-radius: 20px;
    /* border-radius: 50%; */
  }

  .about-info span {
    border-bottom: 2px solid #ffbfa0;
  }
  .skills h4 {
    text-align: center;
    border-bottom: 2px solid #ffbfa0;
    border-bottom-style: dashed;
  }
  @media (max-width: 992px) {
    .infos {
      grid-template-columns: 1fr 1fr;
    }
    .skills-infos {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 637px) {
    padding: 0 10px;
    .infos {
      grid-template-columns: none;
    }
  }
`;
export default AboutInfo;
