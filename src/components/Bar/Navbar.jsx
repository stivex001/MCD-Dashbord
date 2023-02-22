import styled from "styled-components";
import Newside from "../Sidebar/Newside";
import NewTobbar from "../Topbar/NewTobbar";

const Container = styled.div`
  display: flex;
`;

const Navbar = () => {
    //   const activeMenu = true;
  return (
    <Container >
      <Newside />
      <NewTobbar />
    </Container>
  );
};

export default Navbar;
