import { Close, Search } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { H2, MsgContainer } from "../transaction/pending.styles";
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

  const [refData, setRefData] = useState('')
  const [enterRefIsValid, setEnterRefIsValid] = useState(true);
  const {error} = useSelector(state => state.server)
  const handleInputChange = (e) => {
    setRefData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (refData.trim() === "") {
      setEnterRefIsValid(false);
      return;
    }

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
        {!enterRefIsValid && (
              <MsgContainer>
                <H2>Field  is required!</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
            {error && (
              <MsgContainer>
                <H2>Transaction reference not found</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
          <Form onSubmit={handleSubmit}>
          
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
                REF
              </p>
              <Input type="text" placeholder="Enter Server reference" onChange={handleInputChange} />
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
