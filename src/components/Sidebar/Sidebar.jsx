import {
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
  Online,
  OnlineDesc,
  UserContainer,
  UserDesc,
  UserImage,
  Username,
  Wrapper,
} from "./sidebar.styles";
import { Tooltip } from "@mui/material";

const Sidebar = () => {
  return (
    <Container>
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
      <Menu />
    </Container>
  );
};

export default Sidebar;
