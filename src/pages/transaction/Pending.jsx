import Footer from "../../components/footer/Footer";
import PendingTables from "../../components/Pendingtable/PendingTables";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/UI/Button";
import {
  BtnConatiner,
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  P,
  Span,
  Title,
  TransList,
  Wrapper,
} from "./pending.styles";

const Pending = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Pending Transactions</H3>
          <DescP>
            Transactions / <DescSpan>Pending Transactions</DescSpan>
          </DescP>
        </Desc>

        <TransList>
          <Title>Transactions Table</Title>
          <P>
            Click on <Span>Re-process</Span> to reprocess in background.
          </P>
          <BtnConatiner>
            <Button title="Re-process Selected" />
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
