import React from "react";
import Container from "../Container";
import styled from "styled-components";
import bg from "../../assets/bghero.jpg";
import { MdEmail } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";

const Background = styled.div`
  top: 0;
  position: relative;
  background: url(${bg});
  height: 750px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 530px) {
    height: 690px;
  }
`;

const Inner = styled.div`
  height: 490px;
  background: rgba(255, 255, 255, 0.2);
  width: 80%;
  padding: 2rem;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 911px) {
    width: 100%;
  }

  @media (max-width: 543px) {
    padding: 1rem;
  }
`;

const Top = styled.div`
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 69px;

  @media (max-width: 912px) {
    font-size: 50px;
  }

  @media (max-width: 754px) {
    font-size: 50px;
  }

  @media (max-width: 545px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const Middle = styled.div`
  margin-bottom: 30px;

  @media (max-width: 545px) {
    margin: 30px 0;
  }
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const IconText = styled.p`
  font-size: 18px;

  .link {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 545px) {
    font-weight: 500;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Bottom = styled.div``;

const ContactButton = styled.a`
  outline: none;
  border: none;
  padding: 15px 30px;
  background: var(--btn-color);
  color: var(--white);
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;

  &:hover {
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
  }

  @media (max-width: 500px) {
    padding: 15px 30px;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Background>
        <Inner>
          <Top>
            <Text>Ade-Ajayi Akeem</Text>
            <Text>Full Stack Developer</Text>
          </Top>

          <Middle>
            <IconAndText>
              <Icon>
                <MdEmail />
              </Icon>
              <IconText>akboiy50@gmail.com</IconText>
            </IconAndText>
            <IconAndText>
              <Icon>
                <AiOutlineGithub />
              </Icon>
              <IconText>
                <a
                  rel="noopener noreferrer"
                  className="link"
                  href="https://github.com/hakkym00"
                  target="_blank"
                >
                  Github
                </a>
              </IconText>
            </IconAndText>
            <IconAndText>
              <Icon>
                <GrLocationPin />
              </Icon>
              <IconText>Abeokute, Nigeria</IconText>
            </IconAndText>
          </Middle>

          <Bottom>
            <ContactButton href="#contact">contact</ContactButton>
          </Bottom>
        </Inner>
      </Background>
    </Container>
  );
};

export default Hero;
