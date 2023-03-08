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
  const [allUsers, setAllUsers] = useState([]);
  const [userOverview, setUserOverview] = useState('');

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await userRequest.get("/allUsers");
        setAllUsers(res.data.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllUsers();
  }, []);

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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 

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
        <UserTable
          allUsers={allUsers}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Users;
