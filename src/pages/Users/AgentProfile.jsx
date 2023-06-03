/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";

import { getUserPerformance } from "../../Redux/apiCalls";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";
import AgentUserProfile from "./AgentUserProfile";

const AgentProfile = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const users = useSelector((state) =>
    state.user.agents.data.find((user) => user.user_name === decodedId)
  );

  const { userPerformance, isFetching, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const fetchData = async () => {
    await getUserPerformance(dispatch, users?.user_name);
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

          <AgentUserProfile
            users={users}
            userPerformance={userPerformance}
            isFetching={isFetching}
            message={message}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default AgentProfile;
