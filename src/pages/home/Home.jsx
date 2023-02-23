import styled from "styled-components";
import NewTobbar from "../../components/Topbar/NewTobbar";
// import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
  // display: flex;
`;


const Home = () => {
  return (
    <Container>
      <NewTobbar />
      {/* <Topbar /> */}
      <Widgets />
    </Container>
  );
};

export default Home;
