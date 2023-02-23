import { PermIdentity, PowerSettingsNewOutlined, Settings } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import styled from "styled-components"
import online from "../../assets/online.png";

const Container = styled.div`
flex: 1;
height: calc(100vh - 70px);
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba(235, 180, 180, 0.2);
`;
const Wrapper = styled.div``;
export const UserContainer = styled.div`
text-align: center;
margin: 20px auto;
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
margin: 20px;`;
export const Online = styled.div`
`;
export const Icon = styled.img`
height: 10px;
margin-right: 3px;
`;
export const OnlineDesc = styled.span``;
export const IconContainer = styled.div`
margin: 20px;
cursor: pointer;
`;

const Newside = () => {
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
              <PermIdentity style={{ color: "blue", boxShadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.2)', fontSize: '30px', padding: '5px' }} />
            </Tooltip>
            <Tooltip title="Settings">
              <Settings style={{ margin: "0 20px", color: "gray", boxShadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.2)', fontSize: '30px', padding: '5px' }} />
            </Tooltip>
            <Tooltip title="Log Out">
              <PowerSettingsNewOutlined style={{ color: "red", boxShadow: '1px 2px 5px 1px rgba(0, 0, 0, 0.2)', fontSize: '30px', padding: '5px' }} />
            </Tooltip>
          </IconContainer>
          </UserContainer>
      </Wrapper>
    </Container>
  )
}

export default Newside