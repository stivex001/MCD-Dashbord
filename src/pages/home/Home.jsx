import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const Container = styled.div`
  display: flex;
`;
const TopbarContainer = styled.div`
  flex: 4;
`;


const Home = () => {
  return (
    <Container>
      <Sidebar />
      <TopbarContainer>
        <Topbar />
      </TopbarContainer>
      
    </Container>
  );
};

export default Home;
