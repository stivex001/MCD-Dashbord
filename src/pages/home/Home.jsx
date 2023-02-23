import styled from "styled-components";
import Newside from "../../components/Sidebar/Newside";
// import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
  // display: flex;
`;


const Home = () => {
  return (
    <Container>
      <Newside />
      {/* <Topbar /> */}
      <Widgets />
    </Container>
  );
};

export default Home;
