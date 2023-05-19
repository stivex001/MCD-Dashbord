/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";

import {
  getUserPerformance,
  getUserTrans,
  getUserWallet,
} from "../../Redux/apiCalls";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";
import AgentUserProfile from "./AgentUserProfile";
import { Loading } from "../transaction/pending.styles";
import { CircularProgress } from "@mui/material";

const AgentProfile = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const users = useSelector((state) =>
    state.user.agents.data.find((user) => user.user_name === decodedId)
  );

  const { userTrans, userPerformance, userWallet, isFetching, message } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(userTrans?.to);
  const [currentItems, setCurrentItems] = useState(userTrans?.data);

  const itemsPerPage = userTrans?.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      userTrans?.data && userTrans?.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(userTrans?.total / itemsPerPage));
  }, [itemOffset, userTrans, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userTrans?.data.length;
    setItemOffset(newOffset);
    setCurrentTransPage(event.selected + 1);
  };

  const fetchData = async () => {
    // await getSamjiProfile(dispatch);
    await getUserTrans(dispatch, users?.user_name, currentTransPage);
    await getUserWallet(dispatch, users?.user_name, currentWalletPage);
    await getUserPerformance(dispatch, users?.user_name);
  };

  useEffect(() => {
    // Fetch the data and update the currentPage state variable
    fetchData();
  }, []);

  if (isFetching) {
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
            <H3>Profile</H3>
            <DescP>
              User / <DescSpan>Profile</DescSpan>
            </DescP>
          </Desc>

          <AgentUserProfile
            users={users}
            userPerformance={userPerformance}
            userTrans={userTrans}
            isFetching={isFetching}
            currentTransPage={currentTransPage}
            setCurrentTransPage={setCurrentTransPage}
            pageCount={pageCount}
            currentItems={currentItems}
            handlePageClick={handlePageClick}
            setCurrentWalletPage={setCurrentWalletPage}
            currentWalletPage={currentWalletPage}
            userWallet={userWallet}
            message={message}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default AgentProfile;
