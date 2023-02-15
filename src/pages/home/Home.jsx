import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
  display: flex;
`;
const TopbarContainer = styled.div`
  flex: 4;
`;
const WidgetContainer = styled.div`
  
`;


const Home = () => {
  return (
    <Container>
      <Sidebar />
      <TopbarContainer>
        <Topbar />
        <WidgetContainer>
          <Widgets />
        </WidgetContainer>
      </TopbarContainer>
      
    </Container>
  );
};

export default Home;
