import React from "react";
import styled from "styled-components";
import NavbarLogo from "./NavbarLogo";
import Switch from "./Switch";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 1rem;
  background: #002144;
  z-index: 1000;
`;

const Inner = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  text-transform: capitalize;
  display: flex;
`;

const Navbar = () => {
  return (
    <Container>
      <Inner>
        <NavbarLogo />
        <NavLinks>
          <Switch />
        </NavLinks>
      </Inner>
    </Container>
  );
};

export default Navbar;
