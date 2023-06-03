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
import UserProfiles from "./UserProfile";

const Profiles = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const users = useSelector((state) =>
    state.user.allUsers.data.find((user) => user.user_name === decodedId)
  );

  const { userPerformance, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserPerformance(dispatch, users?.user_name);
  }, [dispatch, users]);

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

          <UserProfiles
            users={users}
            userPerformance={userPerformance}
            message={message}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Profiles;
