import React from "react";
import styled from "styled-components";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import TransactionTables from "../../components/Transactiontables/TransactionTables";
import { mobile, tablet } from "../../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const H3 = styled.h3`
  font-size: 18px;
  color: #4a4b4c;
  ${mobile({ display: "none" })};
`;
const DescP = styled.p`
  font-size: 14px;
  color: #8c9ea9;
`;
const DescSpan = styled.span`
  font-size: 14px;
  color: #6c757d;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
  ${tablet({ flexDirection: "column" })};
`;

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
