// import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import UserTable from "../../components/User/UserTable";
import { getUsersOverview } from "../../Redux/apiCalls";
// import { Loading } from "../transaction/pending.styles";
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
 
  const {userOverview} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersOverview(dispatch);
  }, [dispatch]);

  // if (isFetching) {
  //   return (
  //     <Loading>
  //       <CircularProgress style={{ color: "blue" }} />
  //     </Loading>
  //   );
  // }

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
