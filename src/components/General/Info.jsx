import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderData } from "./slideData";

const Container = styled.div`
display: flex;
overflow: hidden;
position: relative;

`;
const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100vw;
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

const Info = () => {
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <Container>
      {sliderData.map((slide, index) => (
        <MessageWrapper>
          <Message>
            {slide.desc}
          </Message>
          <Span>{slide.span}</Span>
        </MessageWrapper>
      ))}
    </Container>
  );
};

export default Info;
