import styled from "styled-components";
import Info from "./Info";
import Widget from "./WIdget";

const Container = styled.div`
`;
const Wrapper = styled.div`
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;

const General = () => {
  return (
    <Container>
        <Wrapper>
            <Widget />
        </Wrapper>
        <Wrapper>
           <Info />
        </Wrapper>
    </Container>
  )
}

export default General