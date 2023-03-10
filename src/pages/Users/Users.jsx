import React, { useEffect, useState } from "react";
import Navbar from "../../components/Bar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import UserTable from "../../components/User/UserTable";
import { userRequest } from "../../requestMethods";
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
  const [userOverview, setUserOverview] = useState("");

  useEffect(() => {
    const getUserOverview = async () => {
      try {
        const res = await userRequest.get("/usersOverview");
        setUserOverview(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserOverview();
  }, []);

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
          <Card type="totalUsers" userOverview={userOverview} />
          <Card type="totalReferred" userOverview={userOverview} />
          <Card type="totalAgent" userOverview={userOverview} />
          <Card type="totalWallet" userOverview={userOverview} />
        </CardContainer>

        {/* TABLES */}
        <UserTable />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Users;
