import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Topbar />
    </Container>
  );
};

export default Home;
