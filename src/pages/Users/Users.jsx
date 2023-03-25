// import { CircularProgress } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import UserTable from "../../components/User/UserTable";
import { getAllUsers, getUsersOverview } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
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
  const { userOverview, allUsers, isFetching } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(allUsers.last_page);
  const [currentItems, setCurrentItems] = useState(allUsers.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = allUsers.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(allUsers.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allUsers.total / itemsPerPage));
  }, [itemOffset, allUsers, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allUsers.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getAllUsers(dispatch, currentPage);
  }, [dispatch, currentPage]);

  useEffect(() => {
    getUsersOverview(dispatch);
  }, [dispatch]);

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

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
          pageCount={pageCount}
          currentItems={currentItems}
          handlePageClick={handlePageClick}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Users;
