import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
height: 100%;
`;
const Wrapper = styled.div`
min-height: 70vh;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Widgets />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Home;
