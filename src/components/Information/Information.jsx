import { useDispatch } from "react-redux";
import useInput from "../../Hooks/use-form";
import { updateUser } from "../../Redux/apiCalls";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
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
import { useNavigate } from "react-router-dom";

const Information = ({ users, isFetching }) => {
  const { value: enteredUsername, valueChangeHandler: usernameInputChange } =
    useInput();

  const { value: enteredCompany, valueChangeHandler: companyInputChange } =
    useInput();

  const { value: enteredBvn, valueChangeHandler: bvnInputChange } = useInput();

  const { value: enteredEmail, valueChangeHandler: emailInputChange } =
    useInput();

  const { value: enteredPhone, valueChangeHandler: phoneInputChange } =
    useInput();

  const { value: enteredAddress, valueChangeHandler: addressInputChange } =
    useInput();

  const { value: enteredTarget, valueChangeHandler: targetInputChange } =
    useInput();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFormSubmission = (e) => {
      e.preventDefault();
      updateUser(dispatch, { id: users.id, full_name:enteredUsername,
        company_name: enteredCompany,
        bvn: enteredBvn,
        email: enteredEmail,
        phoneno: enteredPhone,
        address: enteredAddress,
        target: enteredTarget });
      toast.success("Changes made successfully");
      setTimeout(() => navigate(`/profile/${users.user_name}`), 1000);
     
    };

  return (
    <Container>
      <Title>User Information</Title>
      <P>
        Edit User information <Span>below</Span>
      </P>
      <ToastContainer />
      <FormWrapper onSubmit={handleFormSubmission}>
         <Form>
        <InputContainer>
          <InputTitle>Full Name</InputTitle>
          <Input
            type="text"
            placeholder={users?.full_name || 'Enter Full Name'}
            onChange={usernameInputChange}
            value={enteredUsername}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Business Name</InputTitle>
          <Input
            type="text"
            placeholder={users?.company_name || 'Enter Business Name'}
            onChange={companyInputChange}
            value={enteredCompany}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>BVN</InputTitle>
          <Input
            type="text"
            placeholder={users?.bvn || 'Enter BVN'}
            onChange={bvnInputChange}
            value={enteredBvn}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Email</InputTitle>
          <Input
            type="email"
            placeholder={users?.email || 'Enter Email'}
            onChange={emailInputChange}
            value={enteredEmail}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Phone Number</InputTitle>
          <Input
            type="text"
            placeholder={users?.phoneno || 'Enter Phone Number'}
            onChange={phoneInputChange}
            value={enteredPhone}
          />
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
          <Input
            type="text"
            placeholder={users?.address || 'Enter Address'}
            onChange={addressInputChange}
            value={enteredAddress}
          />
        </InputContainer>
        <InputContainer>
          <TextTitle>Target</TextTitle>
          <TextArea
            placeholder={users?.target || 'Enter Target'}
            onChange={targetInputChange}
            value={enteredTarget}
          />
        </InputContainer>
      </Form>
      <Btn type="submit">{isFetching ? 'Updating': 'Update Profile'}</Btn>
      <ResetButton>
        <Btn>Password Reset</Btn>
        <Btn>Pin Reset</Btn>
      </ResetButton>
      </FormWrapper>
     
    </Container>
  );
};

export default Information;
