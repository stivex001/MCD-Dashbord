import styled from "styled-components";

const Container = styled.div`
margin: 50px 0;
display: flex;

`;
const Left = styled.div`
flex: 1;
`;
const Right = styled.div`
flex: 1;
`;

const ReversalTrans = () => {
  return (
    <Container>
        <Left>
            <p>Transaction</p>
        </Left>
        <Right>
            <p>Reversal</p>
        </Right>
    </Container>
  )
}

export default ReversalTrans