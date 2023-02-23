import styled from "styled-components";
import Newside from "../../components/Sidebar/Newside";
import NewTobbar from "../../components/Topbar/NewTobbar";
// import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
 
`;
const Wrapper = styled.div`
display: flex;
width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <NewTobbar />
      <Wrapper>
        <Newside />
        <Widgets />
      </Wrapper>

      {/* <Topbar /> */}
    </Container>
  );
};

export default Home;
