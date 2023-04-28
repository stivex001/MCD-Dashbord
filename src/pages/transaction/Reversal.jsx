import { Close, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import useInput from "../../Hooks/use-form";
import { getRevesal } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { H2, MsgContainer } from "./pending.styles";
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
  const { isFetching, message, error } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    getRevesal(dispatch, enteredId);
    navigate("/reversal-confirm");
    resetIdInput();
  };

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
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Reversal;
