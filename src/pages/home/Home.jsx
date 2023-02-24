import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
// import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
 
`;
const Wrapper = styled.div`
// display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
      <Navbar />
        <Widgets />
      </Wrapper>
      
      {/* <Topbar /> */}
    </Container>
  );
};

export default Home;
