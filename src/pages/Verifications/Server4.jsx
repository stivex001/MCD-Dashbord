import { Close, Search } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { verifyServer1 } from "../../Redux/apiCalls";
import { H2, MsgContainer } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Btn,
  Container,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Wrapper,
} from "./server.styles";

const Server4 = () => {
  const [refData, setRefData] = useState("");
  const [enterRefIsValid, setEnterRefIsValid] = useState(true);
  const { error, isFetching, message } = useSelector((state) => state.server);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setRefData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (refData.trim() === "") {
      setEnterRefIsValid(false);
      return;
    } else {
      verifyServer1(dispatch, { ref: refData });
      setEnterRefIsValid(true);
      setRefData("");
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Verification &gt; Server4</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Server4</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
          {!enterRefIsValid && (
            <MsgContainer>
              <H2>Field is required!</H2>
              <Close style={{ color: "#806e6b", cursor: "pointer" }} />
            </MsgContainer>
          )}
          {error && (
            <MsgContainer>
              <H2>Transaction reference not found</H2>
              <Close style={{ color: "#806e6b", cursor: "pointer" }} />
            </MsgContainer>
          )}
          {message && toast.success("successfully verified")}
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
                REF
              </p>
              <Input
                type="text"
                placeholder="Enter Server reference"
                onChange={handleInputChange}
                value={refData}
              />
            </InputContainer>
            <Btn type="submit">
              <Search />
              {isFetching ? " Verifying..." : "Verify"}
            </Btn>
          </Form>
          <ToastContainer />
        </FormWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Server4;
