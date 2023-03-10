import {
  AccountBalanceWallet,
  Brush,
  CalendarToday,
  CameraAlt,
  LocationOn,
  MailOutline,
  Phone,
  PhoneIphone,
} from "@mui/icons-material";
import {
  Brandname,
  Btn,
  Container,
  Desc,
  Fullname,
  Left,
  List,
  Right,
  Span,
  UserDesc,
  UserImg,
  Username,
  Wrapper,
} from "./userProfile.styles";

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
            <Phone style={{ color: "#26abf2" }} />
            <UserDesc>
              Phone: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <MailOutline style={{ color: "#26abf2" }} />
            <UserDesc>
              Email: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <LocationOn style={{ color: "#26abf2" }} />
            <UserDesc>
              Location: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              DOB: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Reg.Date: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Last Login: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <AccountBalanceWallet style={{ color: "#26abf2" }} />
            <UserDesc>
              Virtual Account: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <PhoneIphone style={{ color: "#26abf2" }} />
            <UserDesc>
              Installed Version: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Referral Plan: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Level: <Span>08166939205</Span>
            </UserDesc>
          </Desc>
        </Right>
      </Wrapper>

      <List>
        <Btn to="#">General</Btn>
        <Btn to="/">Transactions</Btn>
        <Btn to="/">Wallet</Btn>
        <Btn to="#">Push Notification</Btn>
        <Btn to="#">Information</Btn>
      </List>
    </Container>
  );
};

export default UserProfile;
