import React from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { scroll } from "../../helpers/scroll";

const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 39px;
  right: 29px;
  cursor: pointer;
  background: var(--btn-color);
  z-index: 1002;
  transform: translateY(200%);
  transition: all 0.8s cubic-bezier(0.7, 0, 0.84, 0);
  &.show {
    transform: translateY(0%);
  }

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
  }
`;

const ScrollToTop = ({ show }) => {
  return (
    <Circle className={show && "show"} onClick={scroll}>
      <FaChevronUp color="white" />
    </Circle>
  );
};

export default ScrollToTop;
