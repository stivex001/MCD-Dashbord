import styled from "styled-components";
import Card from "../card/Card";

const Container = styled.div`
padding: 20px;
`;
const Wrapper = styled.div``;
const CardContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
flex-wrap: wrap;
margin-bottom: 50px;
`;
const Desc = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;

const Widgets = () => {
  return (
    <Container>
        <Wrapper>
            <Desc>
                <h3>Home</h3>
                <p>Dashboard / <span>Home</span></p>
            </Desc>
            <CardContainer>
              <Card />
              <Card />
            </CardContainer>
            <CardContainer>
              <Card />
              <Card />
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Widgets