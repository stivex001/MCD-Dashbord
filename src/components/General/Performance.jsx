import {
  Container,
  Desc,
  Heading,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  Qty,
  Title,
  Wrapper,
} from "./performance.styles";

const Performance = ({title, data, airtime, tv, card, checker}) => {
  return (
    <Container>
      <Wrapper>
        <Heading>{title}</Heading>
        <Desc>Overall Performance</Desc>
      </Wrapper>
      <InputContainer>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Data</Label>
            <Qty>{data}</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Airtime</Label>
            <Qty>{airtime}</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">TV</Label>
            <Qty>{tv}</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Recharge Card</Label>
            <Qty>{card}</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
        <InputWrapper>
          <Title>
            <Label htmlFor="">Result Checker</Label>
            <Qty>{checker}</Qty>
          </Title>
          <Input type="range" name="" id="" />
        </InputWrapper>
      </InputContainer>
    </Container>
  );
};

export default Performance;
