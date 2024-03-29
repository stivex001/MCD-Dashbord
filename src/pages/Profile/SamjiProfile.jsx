/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getSamjiProfile, getUserPerformance } from "../../Redux/apiCalls";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";
import SamProfile from "../Users/SamProfile";

const SamjiProfile = () => {
  const { userPerformance, isFetching, message, samji } = useSelector(
    (state) => state.authProfile
  );

  const dispatch = useDispatch();

  const fetchData = async () => {
    await getSamjiProfile(dispatch);
    await getUserPerformance(dispatch, samji?.user_name);
  };

  useEffect(() => {
    // Fetch the data and update the currentPage state variable
    fetchData();
  }, []);

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
            message={message}
            isFetching={isFetching}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default SamjiProfile;
