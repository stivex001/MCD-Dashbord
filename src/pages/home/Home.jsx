import styled from "styled-components";
import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
  // display: flex;
`;


const Home = () => {
  return (
    <Container>
      <Topbar />
      <Widgets />
    </Container>
  );
};

export default Home;
