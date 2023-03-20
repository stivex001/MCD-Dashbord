import { Search } from "@mui/icons-material";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Wrapper,
} from "./server.styles";

const Server1 = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Verification &gt; Server1</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Server1</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
                REF
              </p>
              <Input type="text" placeholder="Enter Server reference" />
            </InputContainer>
            <Btn type='submit'>
              <Search />
              Verify
            </Btn>
          </Form>
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Server1;
