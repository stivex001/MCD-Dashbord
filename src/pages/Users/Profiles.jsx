import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import UserGeneral from "../../components/General/UserGeneral";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";
import { Btn, List } from "../../components/userProfile/userProfile.styles";
import {
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
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  useEffect(() => {
    getUserTrans(dispatch, users?.user_name, currentTransPage);
  }, [dispatch, users, currentTransPage]);

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

          <UserProfiles users={users} />
          <div>
            <List>
              <Btn
                active={currentPage.type.name === "UserGeneral"}
                onClick={() =>
                  handleButtonClick(
                    <UserGeneral
                      users={users}
                      userPerformance={userPerformance}
                    />
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
                      users={users}
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
      </Container>
      <Footer />
    </>
  );
};

export default Profiles;
