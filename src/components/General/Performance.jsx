import styled from "styled-components";

const Container = styled.div`
//   height: 100vh;
`;
const Wrapper = styled.div`
background-color:rgba(51, 50, 101, 0.1);
padding: 24px;
text-align: center;
`;
const Heading = styled.p`
color: #4a4b4c;
font-size: 40px;
`;
const Desc = styled.span`
font-size: 16px;
margin: 10px 0;
`;

const Performance = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>8.33</Heading>
        <Desc>Overall Performance</Desc>
      </Wrapper>
      <div>
        <div>
          <label htmlFor="">Data</label>
          <input type="range" name="" id="" />
        </div>
      </div>
    </Container>
  );
};

export default Performance;
