import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Widgets from "../../components/widgets/Widgets";

const Container = styled.div`
  // display: flex;
`;
const TopbarContainer = styled.div`
  display: flex;
`;
const WidgetContainer = styled.div`
  flex: 4;
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
