import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// const slide = keyframes`
//   0% { transform: translateX(0); }
//   25% { transform: translateX(0); }
//   50% { transform: translateX(-100%); }
//   75% { transform: translateX(-100%); }
//   100% { transform: translateX(0); }
// animation: ${slide} 10s linear infinite;
// `;

const Container = styled.div`
  
`;
const MessageWrapper = styled.div`
  display: flex;
  gap: 10px;
  // overflow: hidden;
  // position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const News = styled.div`
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

const Info = ({ target, gnews }) => {
  

  return (
    <Container>
      <MessageWrapper>
        <News >
          <Message>{gnews}</Message>
          <Span>General News</Span>
        </News>
        {/* <News>
          <Message>{target}</Message>
          <Span>Target</Span>
        </News> */}
      </MessageWrapper>
    </Container>
  );
};

export default Info;
