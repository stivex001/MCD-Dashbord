import {
  Close,
  Dehaze,
  PermIdentity,
  PowerSettingsNewOutlined,
  Search,
  Settings,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { sidebarData } from "../Linklist/data";
import Submenu from "../Linklist/Submenu";
import online from "../../assets/online.png";
import {
  BarSearch,
  Container,
  Icon,
  IconContainer,
  IconWrapper,
  Input,
  LogoTitle,
  MenuWrapper,
  NavIcon,
  Online,
  OnlineDesc,
  Right,
  SidebarLogo,
  SidebarWrap,
  SidebrNav,
  UserContainer,
  UserDesc,
  UserImage,
  UserImg,
  Username,
  Wrapper,
} from "./navBar.styles";
import { useNavigate } from "react-router-dom";
import UserModal from "../modal/UserModal";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/apiCalls";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [screenSize, setScreenSize] = useState();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1024) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }, [screenSize]);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    logout(dispatch);
    navigate('/login')
  }

  const openProfileHandler = () => {
    setOpenModal(!openModal)
  }

  return (
    <Container>
      <Wrapper>
        <NavIcon>
          <IconWrapper>
            <Dehaze
            style={{ color: "white", fontSize: "32px" }}
            onClick={showSidebar}
          />
          </IconWrapper>
          
          <BarSearch>
            <Input type="text" placeholder="Search..." />
            <Search style={{ color: "white", fontSize: "20px" }} />
          </BarSearch>
        </NavIcon>
        <Right onClick={openProfileHandler}>
          <UserImg
            src="https://mcd.5starcompany.com.ng/app/avatar/samji.jpg"
            alt=""
          />
         {openModal && <UserModal /> }
        </Right>
      </Wrapper>
      <SidebrNav sidebar={sidebar}>
        <SidebarWrap>
          <SidebarLogo>
            {/* <LogoImg src="" alt="" /> */}
            <LogoTitle>MCD DASHBOARD</LogoTitle>
            <IconWrapper>
               <Close
              style={{ color: "white", fontSize: "30px", marginLeft: "30px" }}
              onClick={showSidebar}
            />
            </IconWrapper>
           
          </SidebarLogo>

          <UserContainer>
            <UserDesc>
              <UserImage  
                src="https://mcd.5starcompany.com.ng/app/avatar/samji.jpg"
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
                  onClick={handleLogout}
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
