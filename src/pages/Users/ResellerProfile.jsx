/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import ResellerUserProfile from "./ResellerUserProfile";
import { Loading } from "../transaction/pending.styles";
import { CircularProgress } from "@mui/material";

const ResellerProfile = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const searchUsers = useSelector((state) =>
    state.user.resellers.data.find((user) => user.user_name === decodedId)
  );

  const { userTrans, userPerformance, userWallet, isFetching, message } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  const fetchData = async () => {
    await getUserTrans(dispatch, searchUsers?.user_name, currentTransPage);
    await getUserWallet(dispatch, searchUsers?.user_name, currentWalletPage);
    await getUserPerformance(dispatch, searchUsers?.user_name);
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

          <ResellerUserProfile
            searchUsers={searchUsers}
            userPerformance={userPerformance}
            userTrans={userTrans}
            isFetching={isFetching}
            currentTransPage={currentTransPage}
            setCurrentTransPage={setCurrentTransPage}
            setCurrentWalletPage={setCurrentWalletPage}
            userWallet={userWallet}
            message={message}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ResellerProfile;
