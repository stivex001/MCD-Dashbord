import { Close, Dehaze, Search } from "@mui/icons-material";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  BarSearch,
  Container,
  ImgContainer,
  Input,
  Logo,
  LogoContainer,
  LogoImg,
  LogoTitle,
  SidebarLogo,
  SidebarNav,
  SidebarWrap,
  UserImg,
  Wrapper,
} from "./topbar.styles";

const Topbar = () => {
  const [showSidebar, setShowSidebar] = useState();

  const handleMenu = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <LogoContainer>
            <Logo>
              <Dehaze
                style={{ color: "white", fontSize: "30px" }}
                onClick={handleMenu}
              />
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
      <SidebarNav sidebar={showSidebar}>
        <SidebarWrap>
          <SidebarLogo>
            <LogoImg src="" alt="" />
            <LogoTitle>MCD DASHBOARD</LogoTitle>
            <Close
              style={{ color: "white", fontSize: "30px", marginLeft: "30px" }}
              onClick={handleMenu}
            />
          </SidebarLogo>
          <Sidebar />
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Topbar;
