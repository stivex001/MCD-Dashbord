import {
  AccountBalanceWallet,
  EventNote,
  Group,
  MailOutline,
  PermIdentity,
  Search,
  SimCardDownload,
} from "@mui/icons-material";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import useInput from "../../Hooks/use-form";
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

  const handleFormSubmission = (e) => {
    e.preventDefault();
    resetNameInput();
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
              <Input type="number" placeholder="Search for phone number" />
            </InputContainer>
            <InputContainer>
              <Group
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input
                type="text"
                placeholder="Search User group e.g agent, client, reseller"
              />
            </InputContainer>
            <InputContainer>
              <AccountBalanceWallet
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="text" placeholder="Search for wallet value" />
            </InputContainer>
            <InputContainer>
              <MailOutline
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="text" placeholder="Search for email address" />
            </InputContainer>
            <InputContainer>
              <EventNote
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="date" />
            </InputContainer>
          </Form>
          <Btn type="submit">
            <Search />
            Search
          </Btn>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default FindUser;
