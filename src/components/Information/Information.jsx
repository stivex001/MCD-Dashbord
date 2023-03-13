import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
const P = styled.p`
  margin: 20px 0;
  color: #8c9ea9;
  font-size: 13px;
`;
const Span = styled.span`
  font-size: 11.375px;
  color: #33cdff;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1px;
`;
const Input = styled.input`
  padding: 6px 12px;
  flex: 1;
  outline: none;
`;
const InputTitle = styled.p`
  padding: 6px 12px;
  fontsize: 14px;
  color: #495057;
  background: #e9ecef;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  color: #fff;
  background-color: ${prop => prop.type === 'update' ? ' #5b63ae' : '#f64269'};
  cursor: pointer;
  border: none;
  border-radius: 2px;
  width: 15%;
  text-align: center;
  &:hover {
    color: black;
    transition: all 0.5s;
  }
`;
const ResetButton = styled.div`
  display: flex;
  gap: 50px;
  margin: 20px 50px;
`;
const Select = styled.select`
  padding: 6px 12px;
  flex: 1;
  outline: none;
`;
const Option = styled.option`
  padding: 6px 12px;
  flex: 1;
  outline: none;
`;
const TextArea = styled.textarea`
  padding: 12px;
  flex: 1;
  outline: none;
`;
const TextTitle = styled.p`
  padding: 20px;
  fontsize: 14px;
  color: #495057;
  background: #e9ecef;
`;

const Information = () => {
  return (
    <Container>
      <Title>User Information</Title>
      <P>
        Edit User information <Span>below</Span>
      </P>
      <Form>
        <InputContainer>
          <InputTitle>Full Name</InputTitle>
          <Input type="text" placeholder="Odejinmi Samuel" />
        </InputContainer>
        <InputContainer>
          <InputTitle>Business Name</InputTitle>
          <Input type="text" placeholder="Samji Ventures" />
        </InputContainer>
        <InputContainer>
          <InputTitle>BVN</InputTitle>
          <Input type="text" placeholder="22113452879" />
        </InputContainer>
        <InputContainer>
          <InputTitle>Email</InputTitle>
          <Input type="email" placeholder="odejinmisamuel@gmail.com" />
        </InputContainer>
        <InputContainer>
          <InputTitle>Phone Number</InputTitle>
          <Input type="text" placeholder="08166939205" />
        </InputContainer>
        <InputContainer>
          <InputTitle>Status</InputTitle>
          <Select name="status" id="">
            <Option value="superadmin">Superadmin</Option>
            <Option value="client">Client</Option>
            <Option value="reseller">Reseller</Option>
            <Option value="admin">admin</Option>
          </Select>
        </InputContainer>
        <InputContainer>
          <InputTitle>Address</InputTitle>
          <Input type="text" placeholder="12 Akinbo area ogun Nigeria" />
        </InputContainer>
        <InputContainer>
          <TextTitle>Target</TextTitle>
          <TextArea placeholder="Make up to 10 transactions to be eligible for an Agent and send a request mail to info@5starcompany.com.ng where you earn incentives on transactions done at the end of the month" />
        </InputContainer>
      </Form>
      <Btn type='update'>Update Profile</Btn>
      <ResetButton>
        <Btn>Password Reset</Btn>
        <Btn style={{width: '10%'}}>Pin Reset</Btn>
      </ResetButton>
    </Container>
  );
};

export default Information;
