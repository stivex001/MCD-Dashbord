import React from "react";
import Navbar from "../../components/Bar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import UserTable from "../../components/User/UserTable";
import {
  CardContainer,
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";

const Users = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Users List</H3>
          <DescP>
            User / <DescSpan>Users List</DescSpan>
          </DescP>
        </Desc>
        <CardContainer>
          <Card type="totalUsers" />
          <Card type="totalReferred" />
          <Card type="totalAgent" />
          <Card type="totalWallet" />
        </CardContainer>

        {/* TABLES */}
        <UserTable />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Users;
