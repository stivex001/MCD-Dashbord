import {
  AccountBalanceWallet,
  BusinessCenter,
  Class,
  EventNote,
  PermIdentity,
  Search,
  SimCardDownload,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import TransactionSearch from "../../components/Transactiontables/TransactionSearch";
import useInput from "../../Hooks/use-form";
import { getSearchedTrans } from "../../Redux/apiCalls";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Wrapper,
} from "./findTrans.styles";
import { Loading } from "./pending.styles";
import { Desc, DescP, DescSpan, H3 } from "./transHistory.styles";

const FindTransaction = () => {
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
    value: enteredTransRef,
    valueChangeHandler: TransRefInputChange,
    reset: resetRefInput,
  } = useInput();

  const {
    value: enteredWallet,
    valueChangeHandler: WalletInputChange,
    reset: resetWalletInput,
  } = useInput();

  const {
    value: enteredTransType,
    valueChangeHandler: transTypenputChange,
    reset: resetTypeInput,
  } = useInput();

  const {
    value: enteredDate,
    valueChangeHandler: dateInputChange,
    reset: resetDateInput,
  } = useInput();

  const dispatch = useDispatch();
  const { searchTrans, fecthedUsers, isFetching } = useSelector(
    (state) => state.profile
  );

  const allInputValues =
    enteredUsername ||
    enteredTransType ||
    enteredPhonenumber ||
    enteredTransRef ||
    enteredDate ||
    enteredWallet;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (allInputValues.trim() === "") {
      return getSearchedTrans(
        dispatch,
        enteredUsername,
        enteredPhonenumber,
        enteredTransRef
      );
    }
    getSearchedTrans(
      dispatch,
      enteredUsername,
      enteredPhonenumber,
      enteredTransRef
    );
    resetNameInput();
    resetPhonenumberInput();
    resetRefInput();
    resetWalletInput();
    resetTypeInput();
    resetDateInput();
  };

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Desc>
            <H3>Search Transaction</H3>
            <DescP>
              Transactions / <DescSpan>Search Transactions</DescSpan>
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
                <BusinessCenter
                  style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
                />
                <Input
                  type="text"
                  placeholder="Search Transaction Reference"
                  onChange={TransRefInputChange}
                  value={enteredTransRef}
                />
              </InputContainer>
              <InputContainer>
                <AccountBalanceWallet
                  style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
                />
                <Input
                  type="text"
                  placeholder="Search for amount"
                  onChange={WalletInputChange}
                  value={enteredWallet}
                />
              </InputContainer>
              <InputContainer>
                <Class
                  style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
                />
                <Input
                  type="text"
                  placeholder="Search for transaction type"
                  onChange={transTypenputChange}
                  value={enteredTransType}
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
              {isFetching ? "Searching...." : "Search"}
            </Btn>
          </FormWrapper>
          {fecthedUsers && <TransactionSearch searchTrans={searchTrans} />}
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default FindTransaction;
