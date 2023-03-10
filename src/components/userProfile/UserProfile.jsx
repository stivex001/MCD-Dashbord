import { AccountBalanceWallet, Brush, CalendarToday, CameraAlt, LocationOn, MailOutline, Phone, PhoneIphone } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../../responsive";

const Container = styled.div`
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 10px;
`;
const Wrapper = styled.div`
background-color: #181b2c;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 50px;
color: white;
${tablet({ flexDirection: "column", alignItems: 'flex-start', gap: '40px'})};
`;
const Left = styled.div``;
const UserImg = styled.img``;
const Username = styled.p`
font-size: 24px;
`;
const Fullname = styled.p``;
const Brandname = styled.span`
font-size: 13px;
color: #8c9ea9;
`;
const Right = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;
const Desc = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const UserDesc = styled.p`
font-size: 14px;
font-weight: bold;
`;
const Span = styled.span`
font-weight: 400;
`;
const List = styled.div`
padding: 20px;
display: flex;
gap: 20px;
`;
const Btn = styled(NavLink)`
font-size: 14px;
background-color: #fff;
padding: 8px 16px;
border: none;
cursor: pointer;
border-radius: 5px;
text-decoration: none;
color: inherit;

&.active {
    background-color: #605daf;
    color: #fff;
}
`;

const UserProfile = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <UserImg src="" alt="" />
                <CameraAlt />
                <Username>Samji</Username>
                <Fullname>Odejinmi Samuel</Fullname>
                <Brandname>Samji Ventures (superadmin)</Brandname>
            </Left>
            <Right>
                <Desc>
                    <Phone style={{color: '#26abf2'}} />
                    <UserDesc>Phone: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <MailOutline style={{color: '#26abf2'}} />
                    <UserDesc>Email: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <LocationOn style={{color: '#26abf2'}} />
                    <UserDesc>Location: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <CalendarToday style={{color: '#26abf2'}} />
                    <UserDesc>DOB: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <CalendarToday style={{color: '#26abf2'}} />
                    <UserDesc>Reg.Date: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <CalendarToday style={{color: '#26abf2'}} />
                    <UserDesc>Last Login: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <AccountBalanceWallet style={{color: '#26abf2'}} />
                    <UserDesc>Virtual Account: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <PhoneIphone style={{color: '#26abf2'}} />
                    <UserDesc>Installed Version: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Brush style={{color: '#26abf2'}} />
                    <UserDesc>Referral Plan: <Span>08166939205</Span></UserDesc>
                </Desc>
                <Desc>
                    <Brush style={{color: '#26abf2'}} />
                    <UserDesc>Level: <Span>08166939205</Span></UserDesc>
                </Desc>
            </Right>
        </Wrapper>
        
            <List>
                <Btn to='#'>General</Btn>
                <Btn to='/'>Transactions</Btn>
                <Btn to='/'>Wallet</Btn>
                <Btn to='#'>Push Notification</Btn>
                <Btn to='#'>Information</Btn>
            </List>
        
    </Container>
  )
}

export default UserProfile