import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";


const Container = styled.div``;

const Home = () => {
  return (
    <Container>
        <Topbar />
        <Sidebar />
    </Container>
  )
}

export default Home