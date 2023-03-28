import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import UserGeneral from "../../components/General/UserGeneral";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";
import SamjiTrans from "../../components/samjiTrans/SamjiTrans";
import SamjiWallet from "../../components/samjiWallet/SamjiWallet";
import { Btn, List } from "../../components/userProfile/userProfile.styles";

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

        <UserProfiles users={users} />
        <div>
          <List>
            <Btn onClick={() => handleButtonClick(<UserGeneral users={users} />)}>
              General
            </Btn>
            <Btn onClick={() => handleButtonClick(<SamjiTrans />)}>
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

export default Profiles;
