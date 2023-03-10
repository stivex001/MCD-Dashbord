import { useState } from "react";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import General from "../../components/General/General";
import SamjiTrans from "../../components/samjiTrans/SamjiTrans";
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

  const [currentPage, setCurrentPage] = useState(null);


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
        <Btn active={currentPage === <General /> } onClick={() => handleButtonClick(<General />)}>General</Btn>
        <Btn to='#activity_detail' onClick={() => handleButtonClick(<SamjiTrans />)}>Transactions</Btn>
        <Btn to="/">Wallet</Btn>
        <Btn to="#">Push Notification</Btn>
        <Btn to="#">Information</Btn>
      </List>
      {currentPage}
        </div>
        
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Profile;
