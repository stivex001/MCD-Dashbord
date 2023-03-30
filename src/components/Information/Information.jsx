import {
  Btn,
  Container,
  Form,
  Input,
  InputContainer,
  InputTitle,
  Option,
  P,
  ResetButton,
  Select,
  Span,
  TextArea,
  TextTitle,
  Title,
} from "./information.styles";

const Information = ({users}) => {
  return (
    <Container>
      <Title>User Information</Title>
      <P>
        Edit User information <Span>below</Span>
      </P>
      <Form>
        <InputContainer>
          <InputTitle>Full Name</InputTitle>
          <Input type="text" placeholder={users?.full_name} />
        </InputContainer>
        <InputContainer>
          <InputTitle>Business Name</InputTitle>
          <Input type="text" placeholder={users?.company_name} />
        </InputContainer>
        <InputContainer>
          <InputTitle>BVN</InputTitle>
          <Input type="text" placeholder={users?.bvn} />
        </InputContainer>
        <InputContainer>
          <InputTitle>Email</InputTitle>
          <Input type="email" placeholder={users?.email} />
        </InputContainer>
        <InputContainer>
          <InputTitle>Phone Number</InputTitle>
          <Input type="text" placeholder={users?.phoneno} />
        </InputContainer>
        <InputContainer>
          <InputTitle>Status</InputTitle>
          <Select name="status" id="">
          <Option value="superadmin">{users?.status}</Option>
            <Option value="superadmin">Superadmin</Option>
            <Option value="client">Client</Option>
            <Option value="reseller">Reseller</Option>
            <Option value="admin">admin</Option>
          </Select>
        </InputContainer>
        <InputContainer>
          <InputTitle>Address</InputTitle>
          <Input type="text" placeholder={users?.address} />
        </InputContainer>
        <InputContainer>
          <TextTitle>Target</TextTitle>
          <TextArea placeholder={users?.target} />
        </InputContainer>
      </Form>
      <Btn type="update">Update Profile</Btn>
      <ResetButton>
        <Btn>Password Reset</Btn>
        <Btn>Pin Reset</Btn>
      </ResetButton>
    </Container>
  );
};

export default Information;
