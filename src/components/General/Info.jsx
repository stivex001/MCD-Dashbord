import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderData } from "./slideData";

const Container = styled.div`
height: 30vh;
  overflow: hidden;
  position: relative;
`;
const MessageWrapper = styled.div`
  height: ${(props) => props.numPages * 30}vh;
//   position: absolute;
  top: ${(props) => -props.currentPage * 30}vh;
  transition: transform 1s ease-in-out;
  transform: translateY(${(props) => -props.currentPage * 30}vh);
    // display: flex;
  //   flex-direction: column;
  //   gap: 10px;
  //   width: 100vw;
`;
const Message = styled.p`
  font-size: 24px;
  color: ${(props) => (props.type === "alert" ? "#4a4b4c" : "#2d3b48")};
  font-weight: bold;
`;
const Span = styled.span`
  font-size: 14px;
  color: #8c9ea9;
`;

const Info = ({ numPages }) => {
//   const autoScroll = true;
//   let slideInterval;
//   let intervalTime = 5000;

  const [currentPage, setCurrentPage] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((currentPage) => (currentPage + 1) % numPages);
    }, 3000);
    return () => clearInterval(interval);
}, [numPages]);


  return (
    <Container numPages={numPages} currentPage={currentPage}>
      {sliderData.map((slide, index) => (
        <MessageWrapper key={index}>
          <Message>{slide.desc}</Message>
          <Span>{slide.span}</Span>
        </MessageWrapper>
      ))}
    </Container>
  );
};

export default Info;
