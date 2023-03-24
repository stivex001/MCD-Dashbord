import { Search } from "@mui/icons-material";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import ReversalTrans from "../../components/Transactiontables/ReversalTrans";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
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
  const isFetching = false;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    
  };

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
              />
            </InputContainer>
            <Btn type="submit">
              <Search />
              {isFetching ? "Searching...." : "LookUp"}
            </Btn>
          </Form>
        </FormWrapper>
        <ReversalTrans />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Reversal;
