import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import SearchGeneral from "../../components/General/SearchGeneral";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";
import SamjiTrans from "../../components/samjiTrans/SamjiTrans";
import SamjiWallet from "../../components/samjiWallet/SamjiWallet";
import { Btn, List } from "../../components/userProfile/userProfile.styles";
import { getUserTrans } from "../../Redux/apiCalls";
import SearchTransaction from "../Profile/SearchTransaction";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";
import SearchProfile from "./SearchProfile";

const SearchUserProfile = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const decodedId = decodeURIComponent(userId);
  const searchUsers = useSelector((state) =>
    state.profile.searchUsers.find((user) => user.user_name === decodedId)
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
    getUserTrans(dispatch, searchUsers.user_name, currentTransPage);
  }, [dispatch, searchUsers, currentTransPage]);

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

        <SearchProfile searchUsers={searchUsers} />
        <div>
          <List>
            <Btn
              active={currentPage.type.name === "SearchGeneral"}
              onClick={() =>
                handleButtonClick(<SearchGeneral searchUsers={searchUsers} />)
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
            <Btn onClick={() => handleButtonClick(<SamjiWallet />)}>Wallet</Btn>
            <Btn onClick={() => handleButtonClick(<Nofication />)}>
              Push Notification
            </Btn>
            <Btn onClick={() => handleButtonClick(<Information />)}>
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

export default SearchUserProfile;
