import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
`;
const Wrapper = styled.div`
  background-color: rgba(248, 249, 250, 255) s;
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
const InputContainer = styled.div`
  margin: 20px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Label = styled.label`
  font-size: 14px;
  color: #2d3b48;
`;
const Input = styled.input`
&::-webkit-slider-runnable-track {
    height: 6px;
    background-color: #6c757d;
    border-radius: 5px;
  }
  &::-webkit-slider-thumb {
    display: none;
  }


`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Qty = styled.span`
  font-size: 14px;
  color: #8c9ea9;
`;

const Performance = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>8.33</Heading>
        <Desc>Overall Performance</Desc>
      </Wrapper>
      <InputContainer>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Data</Label>
            <Qty>195</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Airtime</Label>
            <Qty>195</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">TV</Label>
            <Qty>195</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Recharge Card</Label>
            <Qty>195</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Result Checker</Label>
            <Qty>195</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
      </InputContainer>
    </Container>
  );
};

export default Performance;
