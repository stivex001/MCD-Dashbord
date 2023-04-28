import { Close, ReportProblem, Search } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import ReversalTrans from "../../components/Transactiontables/ReversalTrans";
import useInput from "../../Hooks/use-form";
import { getRevesal, getRevesalTrans } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { H2, Loading, MsgContainer } from "./pending.styles";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Reverse,
  Wrapper,
} from "./reversal.styles";

const ReverseConfirm = () => {
  const {
    value: enteredId,
    valueChangeHandler: IdInputChange,
    reset: resetIdInput,
  } = useInput();

  const dispatch = useDispatch();
  const { searchReversal, fecthedUsers, isFetching, message, error } =
    useSelector((state) => state.profile);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    getRevesal(dispatch, enteredId);
    resetIdInput();
  };

  const handleReverse = (e) => {
    e.preventDefault();
    getRevesalTrans(dispatch, searchReversal.tran.id);
    setTimeout(() => {
      window.location.reload();
    }, 10000);
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
            <H3>Reversal</H3>
            <DescP>
              Transaction / <DescSpan>Verification &gt; Reversal</DescSpan>
            </DescP>
          </Desc>
          <FormWrapper onSubmit={handleFormSubmission}>
            {error && (
              <MsgContainer>
                <H2>Transactions has been reversed earlier!</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
            {message && (
              <MsgContainer type="success">
                <H2 type="success">Transaction reversed successfully</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
            <Form>
              <InputContainer>
                <p
                  style={{ padding: "5px", fontSize: "20px", color: "#495057" }}
                >
                  #
                </p>
                <Input
                  type="text"
                  placeholder="Enter transaction id or reference"
                  required
                  onChange={IdInputChange}
                  value={enteredId}
                />
              </InputContainer>
              <Btn type="submit">
                <Search />
                {isFetching ? "Searching...." : "LookUp"}
              </Btn>
            </Form>
          </FormWrapper>
          {fecthedUsers && (
            <>
              <ReversalTrans searchReversal={searchReversal} />
              <Reverse onClick={handleReverse}>
                <ReportProblem style={{ fontSize: "15px" }} />
                Reverse transaction
                {/* {isFetching ? "Searching...." : "Search"} */}
              </Reverse>
            </>
          )}
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ReverseConfirm;
