import {
  Close,
  Dehaze,
  PermIdentity,
  PowerSettingsNewOutlined,
  Settings,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import styled from "styled-components";
import {
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
} from "./sidebar.styles";
import online from "../../assets/online.png";
import { SidebarLogo, SidebarWrap } from "../Topbar/topbar.styles";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  transition: 350ms ease-in-out;
`;
const Toggle = styled.div`
  left: -100%;
  transition: 350ms ease-in-out;
`;

const Newside = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleMenu = () => {
      setShowSidebar(!showSidebar);
    };
  return (
    <Container style={{ flex: `${showSidebar ? "1" : "0.1"}` }}>
      {showSidebar ? (
        <Wrapper>
          <SidebarWrap>
            <SidebarLogo style={{padding: '10px 0'}}>
              <LogoImg src="" alt="" />
              <LogoTitle>MCD DASHBOARD</LogoTitle>
              <Close
                style={{ color: "white", fontSize: "30px", marginLeft: "30px" }}
                  onClick={handleMenu}
              />
            </SidebarLogo>
          </SidebarWrap>

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
              <Tooltip title="Profile">
                <PermIdentity style={{ color: "blue" }} />
              </Tooltip>
              <Tooltip title="Settings">
                <Settings style={{ margin: "0 10px", color: "gray" }} />
              </Tooltip>
              <Tooltip title="Log Out">
                <PowerSettingsNewOutlined style={{ color: "red" }} />
              </Tooltip>
            </IconContainer>
          </UserContainer>
        </Wrapper>
      ) : (
        <Toggle>
            <Logo>
              <Dehaze
                style={{ color: "white", fontSize: "30px" }}
                onClick={handleMenu}
              />
            </Logo>
        </Toggle>
      )}
    </Container>
  );
};

export default Newside;
