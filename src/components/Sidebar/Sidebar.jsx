import {
  PermIdentity,
  PowerSettingsNewOutlined,
  Settings,
} from "@mui/icons-material";
import styled from "styled-components";
import Menu from "../Menu/Menu";
import online from '../../assets/online.png'

const Container = styled.div`
  flex: 1;
  height: 100vh;
  position: sticky;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;
const Wrapper = styled.div``;
const Logo = styled.div`
  display: flex;
  align-items: center;
  background-color: #605daf;
  padding: 15px;
`;
const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
const LogoTitle = styled.span`
  color: white;
  font-size: 700;
`;
const UserContainer = styled.div`
text-align: center;
`;
const IconContainer = styled.div`
cursor: pointer;
`;
const UserDesc = styled.div`
display: flex;
flex-direction: column;
`;
const UserImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
margin: 30px auto;
`;
const Username = styled.span``;
const Online = styled.div`
margin: 20px;
`;
const Icon = styled.img`
// width: 10px;
height: 10px;
margin-right: 10px;
`;
const OnlineDesc = styled.span``;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImg src="" alt="" />
          <LogoTitle>MCD DASHBOARD</LogoTitle>
        </Logo>
        <UserContainer>
          <UserDesc>
            <UserImage src="https://avatars.githubusercontent.com/u/87942124?v=4" alt="" />
            <Username>Odejinmi Samuel</Username>
            <Online>
              <Icon src={online} alt="" />
              <OnlineDesc>online</OnlineDesc>
            </Online>
          </UserDesc>
          <IconContainer>
            <PermIdentity style={{color: 'blue'}}/>
            <Settings style={{margin: '0 10px', color: 'gray'}} />
            <PowerSettingsNewOutlined style={{color: 'red'}} />
          </IconContainer>
        </UserContainer>

        <Menu />
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
