import { PermIdentity, PowerSettingsNewOutlined, Settings } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
flex: 1;
height: 100vh;
// background-color: red;
position: sticky;
`;
const Wrapper = styled.div`
// padding: 5px 20px;
`;
const Logo = styled.div`
display: flex;
align-items: center;
background-color:#605daf;
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
const UserContainer = styled.div``;
const IconContainer = styled.div``;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
      <Logo>
            <LogoImg src="" alt="" />
            <LogoTitle>MCD DASHBOARD</LogoTitle>
          </Logo>
          <UserContainer>
            <div>
              <img src="" alt="" />
              <span>Odejinmi Samuel</span>
              <div>
              <img src="" alt="" />
              <span>online</span>
              </div>
            </div>
            <IconContainer>
              <PermIdentity />
              <Settings />
              <PowerSettingsNewOutlined />
            </IconContainer>
          </UserContainer>
      </Wrapper>
    </Container>
  )
}

export default Sidebar