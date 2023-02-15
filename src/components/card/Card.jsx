import { BusinessCenter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-radius: 5px;
  height: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 20px;
`;
const Left = styled.div`
color: green;
`;
const Right = styled.div``;
const P = styled.p`
font-size: 20px;
color: #4a4b4c;
margin-left: 50px;
`;
const Span = styled.span`
font-size: 12px;
color: #8c9ea9;

`;

const Card = () => {
  return (
    <Container>
      <Wrapper>
        <Left >
          <BusinessCenter style={{fontSize: '50px'}} />
        </Left>
        <Right>
          <P>298,746</P>
          <Span>Successful Transactions</Span>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Card;
