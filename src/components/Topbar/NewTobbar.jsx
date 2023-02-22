import { Search } from "@mui/icons-material";
import styled from "styled-components";
import { BarSearch, ImgContainer, Input, UserImg } from "./topbar.styles";

const Container = styled.div`
  background-color: #ccc;
  min-height: 100vh;
  width: 100%;
  flex: 3;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #605daf;
`;
const NavContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const NewTobbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavContainer>
            <BarSearch>
          <Input type="text" placeholder="Search..." />
          <Search style={{ color: "white", fontSize: "20px" }} />
        </BarSearch>
        <ImgContainer>
            <UserImg
              src="https://avatars.githubusercontent.com/u/87942124?v=4"
              alt=""
            />
          </ImgContainer>
        </NavContainer>
        
      </Wrapper>
    </Container>
  );
};

export default NewTobbar;
