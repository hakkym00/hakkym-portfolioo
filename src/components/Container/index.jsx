import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  top: 60px;
  left: 0;
  width: 100%;
  position: relative;
`;

const Container = ({ children }) => {
  return <Inner>{children}</Inner>;
};

export default Container;
