import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import TransactionTables from "../../components/Transactiontables/TransactionTables";
import { getTransHistoryData } from "../../Redux/apiCalls";
import { Loading } from "./pending.styles";
import {
  CardContainer,
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "./transHistory.styles";

const TransHistory = () => {
  const { transHistory, isProcessing } = useSelector(
    (state) => state.transaction
  );

  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(transHistory?.to);
  const [currentItems, setCurrentItems] = useState(transHistory?.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 25;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      transHistory?.data && transHistory?.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(transHistory?.to / itemsPerPage));
  }, [itemOffset, transHistory, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % transHistory?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getTransHistoryData(dispatch, currentPage);
  }, [dispatch, currentPage]);

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
            <H3>Transaction List</H3>
            <DescP>
              Transaction / <DescSpan>Transactions List</DescSpan>
            </DescP>
          </Desc>
          <CardContainer>
            <Card type="totalTransactions" />
            <Card type="transactionToday" />
            <Card type="transactionYesterday" />
            <Card type="transactionAgo" />
          </CardContainer>

          {/* TABLES */}
          <TransactionTables
            transHistory={transHistory}
            pageCount={pageCount}
            currentItems={currentItems}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default TransHistory;
