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
  Container,
  Desc,
  Fullname,
  Left,
  Right,
  Span,
  UserDesc,
  UserImg,
  Username,
  Wrapper,
} from "../../components/userProfile/userProfile.styles";

const SamProfile = ({ samji }) => {
    
  const sam = samji[0];

  return (
    <Container>
      <Wrapper>
        <Left>
          <UserImg src={sam?.photo} alt="" />
          <CameraAlt style={{ fontSize: "20px" }} />
          <Username>{sam?.user_name}</Username>
          <Fullname>{sam?.full_name}</Fullname>
          <Brandname>
            {" "}
            {sam?.company_name} ( {sam?.status})
          </Brandname>
        </Left>
        <Right>
          <Desc>
            <Phone style={{ color: "#26abf2" }} />
            <UserDesc>
              Phone: <Span>{sam?.phoneno}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <MailOutline style={{ color: "#26abf2" }} />
            <UserDesc>
              Email: <Span>{sam?.email}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <LocationOn style={{ color: "#26abf2" }} />
            <UserDesc>
              Location: <Span>{sam?.address}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              DOB: <Span>{sam?.dob}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Reg.Date: <Span>{sam?.reg_date}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Last Login: <Span>{sam?.last_login}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <AccountBalanceWallet style={{ color: "#26abf2" }} />
            <UserDesc>
              Virtual Account: <Span>{sam?.account_number}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <PhoneIphone style={{ color: "#26abf2" }} />
            <UserDesc>
              Installed Version: <Span>v-</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Referral Plan: <Span>{sam?.referral_plan}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Level: <Span>{sam?.level}</Span>
            </UserDesc>
          </Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SamProfile;
