import { Close } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import PendingTables from "../../components/Pendingtable/PendingTables";
import { reProcess } from "../../Redux/apiCalls";
import { emptyCheckbox } from "../../Redux/pendingTransSlice";
// import Button from "../../components/UI/Button";
import {
  BtnConatiner,
  Button,
  Container,
  Desc,
  DescP,
  DescSpan,
  H2,
  H3,
  Loading,
  MsgContainer,
  P,
  Span,
  Title,
  TransList,
  Wrapper,
} from "./pending.styles";

const Pending = () => {
  const { checkId, error, message, isProcessing } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();
  const [showerr, setShowerr] = useState(error);

  const handleReProcess = () => {
    if (checkId.length === 0) {
      return dispatch(emptyCheckbox(showerr));
    } else {
      reProcess(dispatch, checkId);
    }
  };
  const closeErr = () => {
    console.log("close");
    setShowerr(false);
  };

  if (isProcessing) {
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
          <H3>Pending Transactions</H3>
          <DescP>
            Transactions / <DescSpan>Pending Transactions</DescSpan>
          </DescP>
        </Desc>

        <TransList>
          <Title>Pending Transaction List</Title>
          <P>
            Click on <Span>Re-process</Span> to reprocess in background.
          </P>
          {error && (
            <MsgContainer>
              <H2>Kindly select some box!</H2>
              <Close style={{ color: "#806e6b", cursor: "pointer" }} />
            </MsgContainer>
          )}
          {message && (
            <MsgContainer type="success">
              <H2 type="success">
                Transactions has been process in background
              </H2>
              <Close
                style={{ color: "#806e6b", cursor: "pointer" }}
                onClick={closeErr}
              />
            </MsgContainer>
          )}

          <BtnConatiner>
            <Button type="Re-process Selected" onClick={handleReProcess}>
              Re-process Selected
            </Button>
            <Button type="Mark Delivered Selected">
              Mark Delivered Selected
            </Button>
            <Button type="Reverse Transaction Selected">
              Reverse Transaction Selected
            </Button>
          </BtnConatiner>
          <div style={{ marginTop: "10px" }}>
            <PendingTables />
          </div>
        </TransList>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Pending;
