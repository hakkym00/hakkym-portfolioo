import {
  MdCall,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";
import React, { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Container from "../Container";
import { ThemeContext } from "../../context/ThemeContext";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Inner = styled.div`
  display: flex;
  transition: all 0.5s ease;
  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: var(--white);
    color: black;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InnerWrapper = styled.div`
  margin-top: 100px;

  padding: 30px;
  display: flex;
  flex: 1;
  height: 90vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Line = styled.div`
  width: 20px;
  background: var(--btn-color);
  height: 100%;
  position: absolute;
`;

const One = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

const Two = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Bottom = styled.div`
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 60px;
  width: 80%;
  line-height: 1.1;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 30px 0;
`;

const Icon = styled.div``;

const IconText = styled.div`
  margin-left: 10px;
`;

const TwoDesc = styled.div`
  display: flex;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const LightText = styled(BoldText)`
  font-weight: 200;
  line-height: 1.2;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 45px;
  border: none;
  padding: 6px;
  outline: none;
  border-bottom: ${({ isDark }) =>
    isDark ? "1px solid white" : "1px solid black"};

  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: var(--white);
    color: black;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  border: none;
  outline: none;
  border-bottom: ${({ isDark }) =>
    isDark ? "1px solid white" : "1px solid black"};
  margin-bottom: 45px;
  resize: none;

  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: var(--white);
    color: black;
  }
`;

const Submit = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: var(--btn-color);
  padding: 20px;
  color: var(--white);
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    box-shadow: ${({ isDark }) =>
      isDark
        ? "0 4px 10px rgba(255, 255, 255, 0.2)"
        : "0 4px 10px rgba(0, 0, 0, 0.4)"};
  }
`;

const Contact = () => {
  const { isDark, setModal } = useContext(ThemeContext);
  const form = useRef();

  const [toSend, setToSend] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
    reply_to: "",
  });

  const sendEmail = (e) => {
    setModal(true);
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
          setModal(false);
          resetValue();
        },
        (error) => {
          toast.error("Something went wrong, please try again ");
          setModal(false);
          resetValue();
        }
      );
  };

  const resetValue = () => {
    setToSend({
      from_name: "",
      message: "",
      subject: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Toaster />
      <Inner className={isDark ? "dark" : "light"}>
        <Line />

        <InnerWrapper id="contact">
          <One>
            <Title>Let's discuss</Title>
            <Title> your project</Title>
            <Bottom>
              <Info>
                <Icon>
                  <MdCall size={25} />
                </Icon>
                <IconText>+2348101126596</IconText>
              </Info>
              <Info>
                <Icon>
                  <MdOutlineMailOutline size={25} />
                </Icon>
                <IconText>akboiy50@gmail.com</IconText>
              </Info>
              <Info>
                <Icon>
                  <MdOutlineLocationOn size={25} />
                </Icon>
                <IconText>Abeokuta, Nigeria</IconText>
              </Info>
            </Bottom>
          </One>
          <Two>
            <TwoDesc>
              <LightText>
                <BoldText>What do yo have to do?</BoldText> Get in touch with
                me, always available if the right project come along with me
              </LightText>
            </TwoDesc>
            <Form ref={form} onSubmit={sendEmail}>
              <Input
                className={isDark ? "dark" : "light"}
                type="text"
                placeholder="Name"
                name="from_name"
                onChange={handleChange}
                value={toSend.from_name}
              />
              <Input
                className={isDark ? "dark" : "light"}
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
                value={toSend.subject}
              />
              <Input
                className={isDark ? "dark" : "light"}
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={toSend.email}
              />
              <TextArea
                className={isDark ? "dark" : "light"}
                rows="5"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={toSend.message}
              ></TextArea>
              <Submit isDark={isDark}>Submit</Submit>
            </Form>
          </Two>
        </InnerWrapper>
      </Inner>
    </Container>
  );
};

export default Contact;
