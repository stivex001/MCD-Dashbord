import {
  AccountBalanceWallet,
  EventNote,
  Group,
  MailOutline,
  PermIdentity,
  Search,
  SimCardDownload,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import UserSearch from "../../components/User/UserSearch";
import useInput from "../../Hooks/use-form";
import { getSearchedUsers } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Wrapper,
} from "./findUser.styles";

const FindUser = () => {
  const {
    value: enteredUsername,
    valueChangeHandler: usernameInputChange,
    reset: resetNameInput,
  } = useInput();

  const {
    value: enteredPhonenumber,
    valueChangeHandler: phonenumberInputChange,
    reset: resetPhonenumberInput,
  } = useInput();

  const {
    value: enteredGroup,
    valueChangeHandler: GroupInputChange,
    reset: resetGroupInput,
  } = useInput();

  const {
    value: enteredWallet,
    valueChangeHandler: WalletInputChange,
    reset: resetWalletInput,
  } = useInput();

  const {
    value: enteredEmail,
    valueChangeHandler: emailInputChange,
    reset: resetEmailInput,
  } = useInput();

  const {
    value: enteredDate,
    valueChangeHandler: dateInputChange,
    reset: resetDateInput,
  } = useInput();

  const dispatch = useDispatch();
  const { searchUsers , fecthedUsers } = useSelector((state) => state.user);

  

  const allInputValues =
    enteredUsername ||
    enteredEmail ||
    enteredPhonenumber ||
    enteredDate ||
    enteredWallet;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (allInputValues.trim() === '') {
      return getSearchedUsers(dispatch, enteredUsername, enteredPhonenumber);
    }
    getSearchedUsers(dispatch, enteredUsername, enteredPhonenumber);
    resetNameInput();
    resetPhonenumberInput();
    resetGroupInput();
    resetWalletInput();
    resetEmailInput();
    resetDateInput();
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Search User</H3>
          <DescP>
            Users / <DescSpan>Search User</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper onSubmit={handleFormSubmission}>
          <Form>
            <InputContainer>
              <PermIdentity
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Search for username"
                onChange={usernameInputChange}
                value={enteredUsername}
              />
            </InputContainer>
            <InputContainer>
              <SimCardDownload
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="number"
                placeholder="Search for phone number"
                onChange={phonenumberInputChange}
                value={enteredPhonenumber}
              />
            </InputContainer>
            <InputContainer>
              <Group
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Search User group e.g agent, client, reseller"
                onChange={GroupInputChange}
                value={enteredGroup}
              />
            </InputContainer>
            <InputContainer>
              <AccountBalanceWallet
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Search for wallet value"
                onChange={WalletInputChange}
                value={enteredWallet}
              />
            </InputContainer>
            <InputContainer>
              <MailOutline
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Search for email address"
                onChange={emailInputChange}
                value={enteredEmail}
              />
            </InputContainer>
            <InputContainer>
              <EventNote
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="date"
                onChange={dateInputChange}
                value={enteredDate}
              />
            </InputContainer>
          </Form>
          <Btn type="submit">
            <Search />
            Search
          </Btn>
        </FormWrapper>
        {fecthedUsers && <UserSearch searchUsers={searchUsers} />}
      </Wrapper>

      

      <Footer />
    </Container>
  );
};

export default FindUser;
