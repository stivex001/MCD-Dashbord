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

const UserProfiles = ({ users }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <UserImg src="" alt="" />
          <CameraAlt style={{ fontSize: "20px" }} />
          <Username>{users?.user_name}</Username>
          <Fullname>{users?.full_name}</Fullname>
          <Brandname>
            {" "}
            {users?.company_name} ( {users?.status})
          </Brandname>
        </Left>
        <Right>
          <Desc>
            <Phone style={{ color: "#26abf2" }} />
            <UserDesc>
              Phone: <Span>{users?.phoneno}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <MailOutline style={{ color: "#26abf2" }} />
            <UserDesc>
              Email: <Span>{users?.email}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <LocationOn style={{ color: "#26abf2" }} />
            <UserDesc>
              Location: <Span>{users?.address}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              DOB: <Span>{users?.dob}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Reg.Date: <Span>{users?.reg_date}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Last Login: <Span>{users?.last_login}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <AccountBalanceWallet style={{ color: "#26abf2" }} />
            <UserDesc>
              Virtual Account: <Span>{users?.account_number}</Span>
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
              Referral Plan: <Span>{users?.referral_plan}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Level: <Span>{users?.level}</Span>
            </UserDesc>
          </Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default UserProfiles;
