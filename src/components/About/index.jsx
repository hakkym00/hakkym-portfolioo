import React, { useContext } from "react";
import Container from "../Container";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

const Inner = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: var(--white);
    color: black;
  }

  @media (max-width: 674px) {
    height: auto;
  }
`;

const TextBox = styled.div`
  font-size: 1.275rem;
  height: 30%;
  padding: 15px 0px;
  margin-top: 20px;
  line-height: 1.8;
`;

const InnerBox = styled.div`
  box-shadow: rgb(0 0 0 / 18%) 1px 0px 9px 8px,
    rgba(0 0 0 / 12%) 0px 0px 9px 8px;
  width: 80%;
  padding: 1rem 2rem;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;

  @media (max-width: 674px) {
    margin: 30px 0;
    width: 90%;
    height: auto;
  }

  ${TextBox}:nth-child(2) {
    margin: 70px 0;
  }
`;

const About = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Container id="about">
      <Inner className={isDark ? "dark" : "light"}>
        <InnerBox>
          <TextBox>
            Hello 👋! I’m Ade-Ajayi Akeem, Full Stack Developer with 3+ years of
            experience in all stages of the development cycle for dynamic web
            projects in Point of Sale, E-Commerce and Financial Services. Have
            in-depth knowledge in advanced NodeJS, ReactJS, ExpressJS, MongoDB,
            HTML5, CSS3, JavaScript, ES6, Bootstrap, Material UI, Restful API
            and Services.
          </TextBox>
          <TextBox>
            I am a motivated individual who likes to learn new things and is a
            quick learner. I am very passionate and enthusiastic about creating
            constructive and efficient solutions. I believe that having an open
            mind can help you remain creative and grasp ideas from any subject
            to implement it in your field!
          </TextBox>
        </InnerBox>
      </Inner>
    </Container>
  );
};

export default About;
