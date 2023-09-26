import styled, { keyframes } from "styled-components";
import Bounce from "react-reveal/Bounce";

const bounce = keyframes`
0%, 100% {
  transform: translate(-50%, -10px);
  }
      70% {
  transform: translate(-50%, -100px)
  
   }
`;

const dropDown = keyframes`
    0% {
transform: translate(-50%, -2500px);
}
    100% {
transform: translate(-50%,-10px);

 }`;

const ZoomContainer = styled.div`
  background: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.6s;
  z-index: 1001;
  overflow: hidden;
  transform: translateY(100%);
  span {
    padding: 10px;
    font-size: 100px;
  }

  span:nth-child(3) {
    color: var(--btn-color);
  }

  span:nth-child(7) {
    position: relative;
  }

  span:nth-child(7):after {
    position: relative;
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    background: var(--btn-color);
    height: 30px;
    width: 30px;
    transition: all 0.9s ease;
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2);

    animation: ${dropDown} 3.3s ease 0s, ${bounce} 1.2s linear 3.3s infinite;
  }

  @media (max-width: 768px) {
    span {
      padding: 10px;
      font-size: 60px;
    }

    span:nth-child(7):after {
      height: 15px;
      width: 15px;
    }
  }

  @media (max-width: 500px) {
    span {
      padding: 10px;
      font-size: 40px;
    }
  }

  &.show {
    transform: translateY(0%);
  }

  &.hide {
    transition-delay: 1s;
    transform: translateY(-100%);
  }
`;

const LandingAnimation = ({ fixed }) => {
  return (
    <ZoomContainer className={fixed ? "show" : "hide"}>
      <Bounce top cascade when={fixed}>
        <span>HAKKYM</span>
      </Bounce>
    </ZoomContainer>
  );
};

export default LandingAnimation;
