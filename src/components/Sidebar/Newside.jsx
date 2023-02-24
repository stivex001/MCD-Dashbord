import {
  Close,
  Dehaze,
  PermIdentity,
  PowerSettingsNewOutlined,
  Settings,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import online from "../../assets/online.png";
import Menu from "../Menu/Menu";

const Container = styled.div`
  flex: 1;
  background-color: #605daf;
  // left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;
const Left = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  width: 100%;
  height: 70px;
  transition: 350ms ease-in-out;
`;
const LogoTitle = styled.span`
  color: #f5f5f7;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
const IconImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
const Wrapper = styled.div`
  height: calc(100vh - 70px);
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  transition: 350ms ease-in-out;
  // z-index: 10;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 3px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 40px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e7e7f3;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #e7e7f3;
  }
`;
export const UserContainer = styled.div`
  height: 200px;
  text-align: center;
  margin: 20px auto;
  postion: sticky;
  top: 0;
`;
export const UserDesc = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`;
export const Username = styled.span`
  margin: 20px;
  font-size: 16px;
  color: #4a4b4c;
`;
export const Online = styled.div``;
export const Icon = styled.img`
  height: 10px;
  margin-right: 3px;
`;
export const OnlineDesc = styled.span`
  font-size: 13px;
  color: #2d3b48;
`;
export const IconContainer = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const Newside = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenu = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Container sidebar={showSidebar}>
      <Left onClick={handleMenu}>
        {showSidebar ? (
          <Dehaze
            style={{ color: "white", fontSize: "30px" }}
            onClick={handleMenu}
          />
        ) : (
          <>
            {/* <IconImg src={online} alt="" /> */}
            <LogoTitle>MCD DASHBOARD</LogoTitle>
            <Close
              style={{ color: "white", fontSize: "30px", marginLeft: "30px" }}
              onClick={handleMenu}
            />
          </>
        )}
      </Left>
      <Wrapper>
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
              <PermIdentity
                style={{
                  color: "blue",
                  boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, 0.2)",
                  fontSize: "30px",
                  padding: "5px",
                }}
              />
            </Tooltip>
            <Tooltip title="Settings">
              <Settings
                style={{
                  margin: "0 20px",
                  color: "gray",
                  boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, 0.2)",
                  fontSize: "30px",
                  padding: "5px",
                }}
              />
            </Tooltip>
            <Tooltip title="Log Out">
              <PowerSettingsNewOutlined
                style={{
                  color: "red",
                  boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, 0.2)",
                  fontSize: "30px",
                  padding: "5px",
                }}
              />
            </Tooltip>
          </IconContainer>
        </UserContainer>
        <Menu />
      </Wrapper>
    </Container>
  );
};

export default Newside;
