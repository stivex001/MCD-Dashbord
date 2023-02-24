import {
  Close,
  Dehaze,
  PermIdentity,
  PowerSettingsNewOutlined,
  Search,
  Settings,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { sidebarData } from "../Linklist/data";
import Submenu from "../Linklist/Submenu";
import online from "../../assets/online.png";

const Container = styled.div`
flex: 1;
`;
const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: #605daf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;
const BarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #7471b9;
  border-radius: 50px;
  border: 1px solid #605daf;
  padding: 5px 20px;
  cursor: pointer;
  ${tablet({ padding: "5px" })};
  ${mobile({ display: "none" })};
`;
const Input = styled.input`
  border: none;
  background-color: #7471b9;
  outline: none;
  color: white;

  ::placeholder {
    color: white;
  }
`;
const Right = styled.div`
  margin: 20px;
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const NavIcon = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
`;
const SidebrNav = styled.nav`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms ease-in-out;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
export const SidebarLogo = styled.div`
  background-color: #605daf;
  height: 70px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
const LogoTitle = styled.span`
  color: #f5f5f7;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
// const IconImg = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 5px;
// `;
export const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const UserContainer = styled.div`
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
const MenuWrapper = styled.div`
height: calc(100vh - 300px);
overflow-y: auto;
::-webkit-scrollbar {
  width: 7px;
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

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Container>
      <Wrapper>
        <NavIcon>
          <Dehaze
            style={{ color: "white", fontSize: "32px" }}
            onClick={showSidebar}
          />
          <BarSearch>
            <Input type="text" placeholder="Search..." />
            <Search style={{ color: "white", fontSize: "20px" }} />
          </BarSearch>
        </NavIcon>
        <Right>
          <UserImg
            src="https://avatars.githubusercontent.com/u/87942124?v=4"
            alt=""
          />
        </Right>
      </Wrapper>
      <SidebrNav sidebar={sidebar}>
        <SidebarWrap>
          <SidebarLogo>
            {/* <LogoImg src="" alt="" /> */}
            <LogoTitle>MCD DASHBOARD</LogoTitle>
            <Close
              style={{ color: "white", fontSize: "30px", marginLeft: "30px" }}
              onClick={showSidebar}
            />
          </SidebarLogo>

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

          <MenuWrapper>
            {sidebarData.map((item) => (
              <Submenu item={item} key={item.id} />
            ))}
          </MenuWrapper>
        </SidebarWrap>
      </SidebrNav>
    </Container>
  );
};

export default Navbar;
