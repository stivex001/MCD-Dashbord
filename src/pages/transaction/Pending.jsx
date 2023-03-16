import { Close } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import PendingTables from "../../components/Pendingtable/PendingTables";
import Button from "../../components/UI/Button";
import {
  BtnConatiner,
  Container,
  Desc,
  DescP,
  DescSpan,
  H2,
  H3,
  MsgContainer,
  P,
  Span,
  Title,
  TransList,
  Wrapper,
} from "./pending.styles";

const Pending = () => {
  const { checkId, error, message } = useSelector((state) => state.transaction);
  
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
              <Close style={{ color: "#806e6b", cursor: "pointer" }}  />
            </MsgContainer>
          )}
          {message && (
            <MsgContainer type='success'>
              <H2 type='success'>Transactions has been process in background</H2>
              <Close style={{ color: "#806e6b", cursor: "pointer" }}  />
            </MsgContainer>
          )}

          <BtnConatiner>
            <Button
              title="Re-process Selected"
              checkId={checkId}
              error={error}
            />
            <Button title="Mark Delivered Selected" />
            <Button title="Reverse Transaction Selected" />
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
