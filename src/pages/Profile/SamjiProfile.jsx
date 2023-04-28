import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import SamGeneral from "../../components/General/SamGeneral";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";
import { Btn, List } from "../../components/userProfile/userProfile.styles";
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
import SamjiTransaction from "./SamjiTransaction";
import SamWallet from "./SamWallet";

const SamjiProfile = () => {
  const { userPerformance, samWallet, isFetching, message, samji, samTrans } =
    useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(<SamGeneral samji={samji} />);
  const dispatch = useDispatch();
  const [currentTransPage, setCurrentTransPage] = useState(1);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  useEffect(() => {
    getSamjiProfile(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getSamTrans(dispatch, currentTransPage);
  }, [dispatch, currentTransPage]);

  useEffect(() => {
    getSamWallet(dispatch, currentWalletPage);
  }, [dispatch, samji, currentWalletPage]);

  useEffect(() => {
    getUserPerformance(dispatch, samji?.user_name);
  }, [dispatch, samji]);

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

          <SamProfile samji={samji} />
          <div>
            <List>
              <Btn
                active={currentPage.type.name === "SamGeneral"}
                onClick={() =>
                  handleButtonClick(
                    <SamGeneral
                      samji={samji}
                      userPerformance={userPerformance}
                    />
                  )
                }
              >
                General
              </Btn>
              <Btn
                active={currentPage.type.name === "SamjiTransaction"}
                onClick={() =>
                  handleButtonClick(
                    <SamjiTransaction
                      userTrans={samTrans}
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
                active={currentPage.type.name === "SamWallet"}
                onClick={() =>
                  handleButtonClick(
                    <SamWallet
                      setCurrentWalletPage={setCurrentWalletPage}
                      userWallet={samWallet}
                      isFetching={isFetching}
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
      </Container>
      <Footer />
    </>
  );
};

export default SamjiProfile;
