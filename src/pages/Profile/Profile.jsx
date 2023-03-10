import { useState } from "react";
import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";
import General from "../../components/General/General";
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

  const [showGeneral, setShowGeneral] = useState(false);

  const handleShowGeneral = () => {
    setShowGeneral(true)
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
        <div>
        <UserProfile />
        <List>
        <Btn onClick={handleShowGeneral}>General</Btn>
        <Btn to="/">Transactions</Btn>
        <Btn to="/">Wallet</Btn>
        <Btn to="#">Push Notification</Btn>
        <Btn to="#">Information</Btn>
      </List>
        </div>
        {showGeneral && <General />}
        
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Profile;
