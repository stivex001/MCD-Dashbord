import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import UserGeneral from "../../components/General/UserGeneral";
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
import UserProfiles from "./UserProfile";

const Profiles = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const users = useSelector((state) =>
    state.user.allUsers.data.find((user) => user.user_name === decodedId)
  );
  const [currentPage, setCurrentPage] = useState(<UserGeneral users={users} />);
  const { userTrans, userPerformance, userWallet, isFetching, message } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [currentWalletPage, setCurrentWalletPage] = useState(1);


  useEffect(() => {
    getUserWallet(dispatch, users?.user_name, currentWalletPage);
  }, [dispatch, users, currentWalletPage]);

  useEffect(() => {
    getUserPerformance(dispatch, users?.user_name);
  }, [dispatch, users]);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

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
