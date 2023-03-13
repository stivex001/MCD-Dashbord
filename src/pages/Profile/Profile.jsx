import { useState } from "react";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import General from "../../components/General/General";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";
import SamjiTrans from "../../components/samjiTrans/SamjiTrans";
import SamjiWallet from "../../components/samjiWallet/SamjiWallet";
import UserProfile from "../../components/userProfile/UserProfile";
import { Btn, List } from "../../components/userProfile/userProfile.styles";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";

const Profile = () => {

  const [currentPage, setCurrentPage] = useState(<General />);


  const handleButtonClick = (page) => {
    setCurrentPage(page);
  }


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
        
        <UserProfile />
        <div>
        <List>
        <Btn to='/profile/samji/#general_detail'  onClick={() => handleButtonClick(<General />)}>General</Btn>
        <Btn to='/profile/samji/#activity_detail' onClick={() => handleButtonClick(<SamjiTrans />)}>Transactions</Btn>
        <Btn  onClick={() => handleButtonClick(<SamjiWallet />)}>Wallet</Btn>
        <Btn  onClick={() => handleButtonClick(<Nofication />)}>Push Notification</Btn>
        <Btn  onClick={() => handleButtonClick(<Information />)}>Information</Btn>
      </List>
      {currentPage}
        </div>
        
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Profile;
