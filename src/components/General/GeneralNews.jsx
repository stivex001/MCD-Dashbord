import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  overflow: hidden;
  position: relative;
`;
const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const News = styled.div``;
const Message = styled.p`
  font-size: 24px;
  color: ${(props) => (props.type === "alert" ? "#4a4b4c" : "#2d3b48")};
  font-weight: bold;
`;
const Span = styled.span`
  font-size: 14px;
  color: #8c9ea9;
`;

const GeneralNews = ({ users }) => {
  return (
    <Container>
      <MessageWrapper>
        <News>
          <Message>{users.gnews}</Message>
          <Span>General News</Span>
        </News>
        <News>
          <Message>{users.target}</Message>
          <Span>Target</Span>
        </News>
      </MessageWrapper>
    </Container>
  );
};

export default GeneralNews;
