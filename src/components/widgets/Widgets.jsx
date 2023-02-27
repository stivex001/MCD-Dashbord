import styled from "styled-components";
import { laptop, mobile, tablet } from "../../responsive";
import Card from "../card/Card";

const Container = styled.div`
margin: 70px 0;
padding: 20px;
flex: 5;
${tablet({ flex: "3" })};
${laptop({ marginLeft: "250px" })};
`;
const Wrapper = styled.div``;
const CardContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
flex-wrap: wrap;
margin-bottom: 50px;
${mobile({ flexDirection: "column" })};
`;
const Desc = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;
const H3 = styled.h3`
ont-size: 18px;
color: #4a4b4c;
`;
const DescP = styled.p`
font-size: 14px;
color: #8c9ea9;
`;
const DescSpan = styled.span`
font-size: 14px;
color: #6c757d;

`;

const Widgets = () => {
  return (
    <Container>
        <Wrapper>
            <Desc>
                <H3>Home</H3>
                <DescP>Dashboard / <DescSpan>Home</DescSpan></DescP>
            </Desc>
            <CardContainer>
              <Card type='successful' />
              <Card type='pending' />
            </CardContainer>
            <CardContainer>
              <Card type='today' />
              <Card type='month' />
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Widgets