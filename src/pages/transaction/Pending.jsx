import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import PendingTables from "../../components/Pendingtable/PendingTables";
import Button from "../../components/UI/Button";
import { userRequest } from "../../requestMethods";
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
  const [pendingTrans, setPendingTrans] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [checkId, setCheckId] = useState([]);

  useEffect(() => {
    const getPendingTransactions = async () => {
      try {
        const res = await userRequest.get("/transactions/pending");
        setPendingTrans(res.data.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPendingTransactions();
  }, [pendingTrans]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (e) => {
    const id = e.target.value;
    if (e.target.checked) {
      setCheckId([...checkId, id]);
    } else {
      setCheckId(checkId.filter((checkedId) => checkedId !== id));
    }
  };

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
          <MsgContainer>
            <H2>Kindly select some box!</H2>
            <Close style={{ fontSize: '24px', cursor: 'pointer'}} />
          </MsgContainer>
          <BtnConatiner>
            <Button title="Re-process Selected" checkId={checkId} />
            <Button title="Mark Delivered Selected" />
            <Button title="Reverse Transaction Selected" />
          </BtnConatiner>
          <div style={{ marginTop: "10px" }}>
            <PendingTables
              pendingTrans={pendingTrans}
              page={page}
              rowsPerPage={rowsPerPage}
              checkId={checkId}
              handleChangePage={handleChangePage}
              handleChange={handleChange}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
        </TransList>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Pending;
