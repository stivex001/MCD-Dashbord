import styled from "styled-components";

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  gap:20px;
`;
const Wrapper = styled.div`
background-color: #775fd5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
const Left = styled.div``;
const Right = styled.div``;
const P = styled.p`
font-size: 24px;
color: #fff;
`;
const Span = styled.span`
   font-size: 13px;
   color: #fff;
`;

const Widget = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <P>#455</P>
          <Span>Wallet Balance</Span>
        </Left>
        <Right>
          <P>#368</P>
          <Span>Bonus Balance</Span>
        </Right>
      </Wrapper>
      <Wrapper>
        <Left>
          <P>#455</P>
          <Span>Agent Comm</Span>
        </Left>
        <Right>
          <P>#368</P>
          <Span>Mega Points</Span>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Widget;
