import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import SearchGeneral from "../../components/General/SearchGeneral";
import Nofication from "../../components/Notification/Notification";
import { Btn, List } from "../../components/userProfile/userProfile.styles";
import {
  getUserPerformance,
  getUserTrans,
  getUserWallet,
} from "../../Redux/apiCalls";
import SearchInformation from "../Profile/SearchInformation";
import SearchTransaction from "../Profile/SearchTransaction";
import SearchWallet from "../Profile/SearchWallet";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";
import ResellerUserProfile from "./ResellerUserProfile";

const ResellerProfile = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const searchUsers = useSelector((state) =>
    state.user.resellers.data.find((user) => user.user_name === decodedId)
  );

  const [currentPage, setCurrentPage] = useState(
    <SearchGeneral searchUsers={searchUsers} />
  );
  const { userTrans, userPerformance, userWallet, isFetching, message } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  useEffect(() => {
    getUserTrans(dispatch, searchUsers?.user_name, currentTransPage);
  }, [dispatch, searchUsers, currentTransPage]);

  useEffect(() => {
    getUserWallet(dispatch, searchUsers?.user_name, currentWalletPage);
  }, [dispatch, searchUsers, currentWalletPage]);

  useEffect(() => {
    getUserPerformance(dispatch, searchUsers?.user_name);
  }, [dispatch, searchUsers]);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Profile</H3>
          <DescP>
            User / <DescSpan>Profile</DescSpan>
          </DescP>
        </Desc>

        <ResellerUserProfile searchUsers={searchUsers} />
        <div>
          <List>
            <Btn
              active={currentPage.type.name === "SearchGeneral"}
              onClick={() =>
                handleButtonClick(
                  <SearchGeneral
                    searchUsers={searchUsers}
                    userPerformance={userPerformance}
                  />
                )
              }
            >
              General
            </Btn>
            <Btn
              active={currentPage.type.name === "SearchTransaction"}
              onClick={() =>
                handleButtonClick(
                  <SearchTransaction
                    userTrans={userTrans}
                    isFetching={isFetching}
                    currentTransPage={currentTransPage}
                    setCurrentTransPage={setCurrentTransPage}
                  />
                )
              }
            >
              Transactions
            </Btn>
            <Btn
              active={currentPage.type.name === "SearchWallet"}
              onClick={() =>
                handleButtonClick(
                  <SearchWallet
                    setCurrentWalletPage={setCurrentWalletPage}
                    userWallet={userWallet}
                  />
                )
              }
            >
              Wallet
            </Btn>
            <Btn
              active={currentPage.type.name === "Nofication"}
              onClick={() => handleButtonClick(<Nofication />)}
            >
              Push Notification
            </Btn>
            <Btn
              active={currentPage.type.name === "SearchInformation"}
              onClick={() =>
                handleButtonClick(
                  <SearchInformation
                    users={searchUsers}
                    isFetching={isFetching}
                    message={message}
                  />
                )
              }
            >
              Information
            </Btn>
          </List>
          {currentPage}
        </div>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ResellerProfile;
