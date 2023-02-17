import React from "react";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import TransactionTables from "../../components/Transactiontables/TransactionTables";
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
  return (
    <Container>
      <Topbar />
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
        <TransactionTables />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default TransHistory;
