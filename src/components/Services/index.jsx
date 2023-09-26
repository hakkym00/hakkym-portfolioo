import React, { useContext } from "react";
import Container from "../Container";
import styled from "styled-components";
import fe from "../../assets/fe.svg";
import be from "../../assets/be.svg";
import db from "../../assets/db.svg";
import { ThemeContext } from "../../context/ThemeContext";

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  color: var(--white);

  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: #fff;
  }

  @media (max-width: 605px) {
    flex-direction: column;
  }
`;

const InnerBox = styled.div`
  width: 80%;
`;

const Top = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 48px;
  margin-bottom: 30px;
  color: var(--btn-color);
`;

const Bottom = styled.div`
  color: var(--white);
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  @media (max-width: 605px) {
    flex-direction: column;
    height: 1000px;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  flex-direction: column;
  background: var(--btn-color);
  gap: 15px;
  flex: 1;
  height: 430px;
  border-radius: 15px;

  @media (max-width: 605px) {
    height: 830px;
  }
`;

const CardImageContainer = styled.div`
  width: 90px;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardText = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 1.5;
`;

const CardBody = styled.div`
  font-size: 15px;
  text-align: center;
  font-weight: 300;
  line-height: 1.4;
`;

const Services = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Container>
      <Inner className={isDark ? "dark" : "light"}>
        <InnerBox>
          <Top className={isDark ? "dark" : "light"}>Services</Top>
          <Bottom>
            <Card>
              <CardImageContainer>
                <CardImage src={fe} />
              </CardImageContainer>
              <CardText>Frontend - developer</CardText>
              <CardBody>HTML CSS React</CardBody>
              <CardBody> Javascript Typescript</CardBody>
            </Card>
            <Card>
              <CardImageContainer>
                <CardImage src={be} />
              </CardImageContainer>
              <CardText>Backend - developer</CardText>
              <CardBody>Node JS</CardBody>
              <CardBody> Express JS</CardBody>
            </Card>
            <Card>
              <CardImageContainer>
                <CardImage src={db} />
              </CardImageContainer>
              <CardText>Database</CardText>
              <CardBody>SQL - Server</CardBody>
              <CardBody> MongoDB</CardBody>
            </Card>
          </Bottom>
        </InnerBox>
      </Inner>
    </Container>
  );
};

export default Services;
