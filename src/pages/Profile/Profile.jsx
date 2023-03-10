import Navbar from "../../components/Bar/Navbar";

import Footer from "../../components/footer/Footer";

import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "../transaction/transHistory.styles";

const Profile = () => {
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
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Profile;
