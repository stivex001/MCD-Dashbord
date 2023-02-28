import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div``;
const Wrapper = styled.div``;

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
