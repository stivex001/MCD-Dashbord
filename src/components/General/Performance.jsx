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
const InputContainer = styled.div``;
const InputWrapper = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

const Performance = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>8.33</Heading>
        <Desc>Overall Performance</Desc>
      </Wrapper>
      <InputContainer>
        <InputWrapper>
          <Label htmlFor="">Data</Label>
          <Input type="range" name="" id="" />
        </InputWrapper>
      </InputContainer>
    </Container>
  );
};

export default Performance;
