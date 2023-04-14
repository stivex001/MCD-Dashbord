import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import SamGeneral from "../../components/General/SamGeneral";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";
import { Btn, List } from "../../components/userProfile/userProfile.styles";
import {
  getSamjiProfile,
  getUserPerformance,
  getUserTrans,
  getUserWallet,
} from "../../Redux/apiCalls";
import ProfileTransaction from "../Profile/ProfileTransaction";
import ProfileWallet from "../Profile/ProfileWallet";

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
//   const location = useLocation();
//   const userId = location.pathname.split("/")[2];
//   const decodedId = decodeURIComponent(userId);
  //   const samji = useSelector((state) =>
  //     state.user.allUsers.data.find((user) => user.user_name === decodedId)
  //   );

  const { userTrans, userPerformance, userWallet, isFetching, message, samji } =
    useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(<SamGeneral samji={samji} />);
  const dispatch = useDispatch();
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  useEffect(() => {
    getSamjiProfile(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getUserTrans(dispatch, samji?.user_name, currentTransPage);
  }, [dispatch, samji, currentTransPage]);

  useEffect(() => {
    getUserWallet(dispatch, samji?.user_name, currentWalletPage);
  }, [dispatch, samji, currentWalletPage]);

  useEffect(() => {
    getUserPerformance(dispatch, samji?.user_name);
  }, [dispatch, samji]);

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

        <SamProfile samji={samji} />
        <div>
          <List>
            <Btn
              active={currentPage.type.name === "SamGeneral"}
              onClick={() =>
                handleButtonClick(
                  <SamGeneral samji={samji} userPerformance={userPerformance} />
                )
              }
            >
              General
            </Btn>
            <Btn
              active={currentPage.type.name === "ProfileTransaction"}
              onClick={() =>
                handleButtonClick(
                  <ProfileTransaction
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
              active={currentPage.type.name === "ProfileWallet"}
              onClick={() =>
                handleButtonClick(
                  <ProfileWallet
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
              active={currentPage.type.name === "Information"}
              onClick={() =>
                handleButtonClick(
                  <Information
                    samji={samji}
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

export default SamjiProfile;
