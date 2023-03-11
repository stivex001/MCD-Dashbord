import styled from "styled-components";

const Container = styled.div``;
const MessageWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
const Message = styled.p`
font-size: 24px;
color: ${props => props.type === 'alert' ? '#4a4b4c' : '#2d3b48'};
font-weight: bold;
`;
const Span = styled.span`
font-size: 14px;
color: #8c9ea9;
`;

const Info = () => {
  return (
    <Container>
        <MessageWrapper>
            <Message type='alert'>
        Make up to 10 transactions to be eligible for an Agent and send a
        request mail to info@5startcompany.com.ng where you earn incentives on
        transactions done at the end of the month
      </Message>
      <Span>Target</Span>
        </MessageWrapper>
      <MessageWrapper>
        <Message>
        To Load MTN (Data Pin 1.5GB). Dial: *460*6*1#, then enter pin Generated
        in the prompt shown on your MTN sim. To Check the Data Balance Dial:
        *312*5#
      </Message>
      <Span>General News</Span>
      </MessageWrapper>
      
    </Container>
  );
};

export default Info;
