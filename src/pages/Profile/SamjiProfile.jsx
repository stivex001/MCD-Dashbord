/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  getSamjiProfile,
  getSamTrans,
  getSamWallet,
  getUserPerformance,
} from "../../Redux/apiCalls";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";
import SamProfile from "../Users/SamProfile";
import { Loading } from "../transaction/pending.styles";
import { CircularProgress } from "@mui/material";

const SamjiProfile = () => {
  const { userPerformance, samWallet, isFetching, message, samji, samTrans } =
    useSelector((state) => state.authProfile);
  // const [currentPage, setCurrentPage] = useState(<SamGeneral samji={samji} />);
  const dispatch = useDispatch();
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  const fetchData = async () => {
    await getSamjiProfile(dispatch);
    await getSamTrans(dispatch, currentTransPage);
    await getSamWallet(dispatch, currentWalletPage);
    await getUserPerformance(dispatch, samji?.user_name);
  };

  useEffect(() => {
    // Fetch the data and update the currentPage state variable
    fetchData();
  }, []);

  console.log(samTrans);
  console.log(currentTransPage);

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

          <SamProfile
            samji={samji}
            userPerformance={userPerformance}
            userTrans={samTrans}
            isFetching={isFetching}
            currentTransPage={currentTransPage}
            setCurrentTransPage={setCurrentTransPage}
            setCurrentWalletPage={setCurrentWalletPage}
            userWallet={samWallet}
            message={message}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default SamjiProfile;
