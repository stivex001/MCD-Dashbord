import { Close, Dehaze, Search } from "@mui/icons-material";
import { useState } from "react";
import {
  BarSearch,
  Container,
  ImgContainer,
  Input,
  Logo,
  LogoContainer,
  LogoImg,
  LogoTitle,
  SidebarNav,
  SidebarWrap,
  UserImg,
  Wrapper,
} from "./topbar.styles";

const Topbar = () => {
  const [showSidebar, setShowSidebar] = useState()

  const handleMenu = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <>
    <Container>
      <Wrapper>
        <LogoContainer>
        <Logo>
          <Dehaze style={{color: 'white', fontSize: '30px'}} onClick={handleMenu}/>
        </Logo>
          <BarSearch>
            <Input type="text" placeholder="Search..." />
            <Search style={{ color: "white", fontSize: "20px" }} />
          </BarSearch>
        </LogoContainer>
        <ImgContainer>
          <UserImg
            src="https://avatars.githubusercontent.com/u/87942124?v=4"
            alt=""
          />
        </ImgContainer>
      </Wrapper>
    </Container>
    <SidebarNav>
        <SidebarWrap>
          <Logo>
             <Close />
          </Logo>
         
        </SidebarWrap>
      </SidebarNav>
    </>
    
  );
};

export default Topbar;
