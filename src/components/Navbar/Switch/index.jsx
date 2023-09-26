import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";

const SwitchContainer = styled.div`
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

const SwitchInner = styled.div`
  width: 50px;
  background: white;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 3px;
  transition: all 19s ease;
`;

const SwitchBall = styled.div`
  height: 15px;
  width: 15px;
  background: grey;
  border-radius: 50%;
  cursor: pointer;
  transform: translateX(0%);
  transition: all 0.2s ease;

  &.dark {
    transform: translateX(200%);
  }
`;

const Switch = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <SwitchContainer>
      <SwitchInner className={isDark ? "dark" : "light"}>
        <SwitchBall
          onClick={() => setIsDark(!isDark)}
          className={isDark ? "dark" : "light"}
        />
      </SwitchInner>
    </SwitchContainer>
  );
};

export default Switch;
