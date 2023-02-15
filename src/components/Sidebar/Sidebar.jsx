import {
  Close,
  Dehaze,
  PermIdentity,
  PowerSettingsNewOutlined,
  Settings,
} from "@mui/icons-material";
import Menu from "../Menu/Menu";
import online from "../../assets/online.png";
import {
  Container,
  Icon,
  IconContainer,
  Logo,
  LogoImg,
  LogoTitle,
  Online,
  OnlineDesc,
  UserContainer,
  UserDesc,
  UserImage,
  Username,
  Wrapper,
} from "./sidebar.styles";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState()

  const handleMenu = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImg src="" alt="" />
          <LogoTitle>MCD DASHBOARD</LogoTitle>
          <Close onClick={handleMenu}/>
        </Logo>
        <UserContainer>
          <UserDesc>
            <UserImage
              src="https://avatars.githubusercontent.com/u/87942124?v=4"
              alt=""
            />
            <Username>Odejinmi Samuel</Username>
            <Online>
              <Icon src={online} alt="" />
              <OnlineDesc>online</OnlineDesc>
            </Online>
          </UserDesc>
          <IconContainer>
            <PermIdentity style={{ color: "blue" }} />
            <Settings style={{ margin: "0 10px", color: "gray" }} />
            <PowerSettingsNewOutlined style={{ color: "red" }} />
          </IconContainer>
        </UserContainer>
      </Wrapper>
      <Menu />
    </Container>
  );
};

export default Sidebar;
