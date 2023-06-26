import { Close } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import PendingTables from "../../components/Pendingtable/PendingTables";
import {
  getPendingTransData,
  reProcess,
  reversal,
} from "../../Redux/apiCalls";
import {
  clearError,
  clearMessage,
  emptyCheckbox,
  toggleCheckbox,
} from "../../Redux/pendingTransSlice";
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
  const {
    checkId,
    error,
    message,
    pendingTrans,
    isProcessing,
    reversalMessage,
  } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(pendingTrans?.last_page);
  const [currentItems, setCurrentItems] = useState(pendingTrans?.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = pendingTrans?.per_page;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      pendingTrans?.data && pendingTrans?.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(pendingTrans?.total / itemsPerPage));
  }, [itemOffset, pendingTrans, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % pendingTrans?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getPendingTransData(dispatch);
  }, [dispatch]);

  const handleReProcess = () => {
    if (checkId.length === 0) {
      return dispatch(emptyCheckbox(error));
    } else {
      reProcess(dispatch, checkId);
      dispatch(emptyCheckbox());
    }
  };

  const handleChange = (e) => {
    const id = e.target.value;
    dispatch(toggleCheckbox(id));
  };

  const handleRevesal = (e) => {
    if (checkId.length === 0) {
      return dispatch(emptyCheckbox(error));
    } else {
      reversal(dispatch, checkId);
      dispatch(emptyCheckbox());
    }
  };

  const handleClose = () => {
    dispatch(clearMessage());
    dispatch(clearError());
  };

  if (isProcessing) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
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
                <Close
                  onClick={handleClose}
                  style={{ color: "#806e6b", cursor: "pointer" }}
                />
              </MsgContainer>
            )}
            {message && (
              <MsgContainer type="success">
                <H2 type="success">
                  Transactions has been process in background
                </H2>
                <Close
                  style={{ color: "#806e6b", cursor: "pointer" }}
                  onClick={handleClose}
                />
              </MsgContainer>
            )}

            {/* {reversalMessage && (
              <MsgContainer type="success">
                <H2 type="success">{reversalMessage.message}</H2>
                <Close
                  style={{ color: "#806e6b", cursor: "pointer" }}
                  onClick={handleClose}
                />
              </MsgContainer>
            )} */}

            <BtnConatiner>
              <Button type="Re-process Selected" onClick={handleReProcess}>
                Re-process Selected
              </Button>
              <Button type="Mark Delivered Selected">
                Mark Delivered Selected
              </Button>
              <Button
                type="Reverse Transaction Selected"
                onClick={handleRevesal}
              >
                Reverse Transaction Selected
              </Button>
            </BtnConatiner>
            <div style={{ marginTop: "10px" }}>
              <PendingTables
                pendingTrans={pendingTrans}
                pageCount={pageCount}
                currentItems={currentItems}
                showerr={error}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                handleChange={handleChange}
                handleRevesal={handleRevesal}
              />
            </div>
          </TransList>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Pending;
