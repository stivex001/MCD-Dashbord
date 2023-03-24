import { Search } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import ReversalTrans from "../../components/Transactiontables/ReversalTrans";
import useInput from "../../Hooks/use-form";
import { getRevesal } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { Loading } from "./pending.styles";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Wrapper,
} from "./reversal.styles";

const Reversal = () => {
  const {
    value: enteredId,
    valueChangeHandler: IdInputChange,
    reset: resetIdInput,
  } = useInput();

  const dispatch = useDispatch();
  const { searchReversal, fecthedUsers, isFetching } = useSelector(
    (state) => state.profile
  );

  const handleFormSubmission = (e) => {
    e.preventDefault();
    getRevesal(dispatch, enteredId);
    resetIdInput();
  };

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Reversal</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Reversal</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper onSubmit={handleFormSubmission}>
          <Form>
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
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
        {fecthedUsers && <ReversalTrans searchReversal={searchReversal.tran} />}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Reversal;
