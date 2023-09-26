import React, { useContext, useEffect, useState } from "react";
import {
  About,
  Contact,
  Hero,
  LandingAnimation,
  Navbar,
  Projects,
  ScrollTop,
  Services,
} from "./components";
import styled from "styled-components";
import { CircleLoader } from "react-spinners";
import { ThemeContext } from "./context/ThemeContext";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  overflow-y: hidden;
`;

const Inner = styled.div``;

const App = () => {
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(false);
  const { modal } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderName = () => {
    setFixed(true);
  };

  const removeName = () => {
    setFixed(false);
  };

  const renderModal = () => {
    return (
      <Modal>
        <CircleLoader size="100px" speedMultiplier={2} color="#FF7878" />
      </Modal>
    );
  };

  useEffect(() => {
    renderName();
    setTimeout(removeName, 5900);
  }, []);

  return (
    <Inner modal={modal}>
      {!fixed && modal && renderModal()}
      <LandingAnimation fixed={fixed} />
      {!fixed && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
          <ScrollTop show={show} />
        </>
      )}
    </Inner>
  );
};

export default App;
