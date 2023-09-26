import React, { useContext } from "react";

import Container from "../Container";
import { ThemeContext } from "../../context/ThemeContext";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";
import ss5 from "../../assets/ss5.png";
import ss6 from "../../assets/ss6.png";
import ss7 from "../../assets/ss7.png";
import ss8 from "../../assets/ss8.png";
import styled from "styled-components";

const Top = styled.div`
  padding: 50px 100px;
  overflow: hidden;
  @media (max-width: 984px) {
    padding: 20px;
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: var(--btn-color);
  margin-bottom: 20px;

  @media (max-width: 984px) {
    font-size: 39px;
  }
`;

const Inner = styled.div`
  transition: all 0.5s ease;
  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: var(--white);
    color: black;
  }
`;

const TextDesc = styled.div`
  text-align: center;
`;

const SingleProduct = styled.div`
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: auto;
  @media (max-width: 984px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TabBrowser = styled.div`
  height: 20px;
  background: rgb(243, 242, 242);
  display: flex;
  z-index: 2;
  position: sticky;
`;

const Circle = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin: 3px;
  background: white;
`;

const Image = styled.img`
  width: 100%;
  transition: all 5s ease;
  &:hover {
    transform: translateY(-250px);
  }
`;

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    { id: 1, img: ss1, link: "https://ecommerce-sanity-three.vercel.app/" },
    { id: 2, img: ss2, link: "https://photo-captur.vercel.app/" },
    { id: 3, img: ss3, link: "https://ecommercestore.onrender.com/" },
    { id: 4, img: ss4, link: "https://real-estate-rust-eight.vercel.app/" },
    { id: 5, img: ss5, link: "https://hakkym-amazona.onrender.com/" },
    { id: 6, img: ss6, link: "https://netflix-build-9824f.web.app/" },
    { id: 7, img: ss7, link: "https://hakkym-store.web.app/" },
    { id: 8, img: ss8, link: "https://airbnb-clone-b8dc4.web.app/" },
  ];

  return (
    <Container>
      <Inner className={isDark ? "dark" : "light"}>
        <Top>
          <Title>Create & Inspire. It's Dev_hakkym</Title>

          <TextDesc>
            Dev_hakkym is a creative portfolio that your work has been waiting
            for, Beautiful homes, stunning portfolio styles, and a whole lot
            more await inside
          </TextDesc>
        </Top>
        <Bottom>
          {projects.map((project) => {
            return (
              <a
                href={project.link}
                key={project.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SingleProduct>
                  <TabBrowser>
                    <Circle />
                    <Circle />
                    <Circle />
                  </TabBrowser>
                  <Image src={project.img} />
                </SingleProduct>
              </a>
            );
          })}
        </Bottom>
      </Inner>
    </Container>
  );
};

export default Projects;
