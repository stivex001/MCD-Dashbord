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
  
  const SearchProfile = ({ searchUsers }) => {
    return (
      <Container>
        <Wrapper>
          <Left>
            <UserImg src="" alt="" />
            <CameraAlt style={{ fontSize: "20px" }} />
            <Username>{searchUsers?.user_name}</Username>
            <Fullname>{searchUsers?.full_name}</Fullname>
            <Brandname>
              {" "}
              {searchUsers?.company_name} ( {searchUsers?.status})
            </Brandname>
          </Left>
          <Right>
            <Desc>
              <Phone style={{ color: "#26abf2" }} />
              <UserDesc>
                Phone: <Span>{searchUsers?.phoneno}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <MailOutline style={{ color: "#26abf2" }} />
              <UserDesc>
                Email: <Span>{searchUsers?.email}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <LocationOn style={{ color: "#26abf2" }} />
              <UserDesc>
                Location: <Span>{searchUsers?.address}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <CalendarToday style={{ color: "#26abf2" }} />
              <UserDesc>
                DOB: <Span>{searchUsers?.dob}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <CalendarToday style={{ color: "#26abf2" }} />
              <UserDesc>
                Reg.Date: <Span>{searchUsers?.reg_date}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <CalendarToday style={{ color: "#26abf2" }} />
              <UserDesc>
                Last Login: <Span>{searchUsers?.last_login}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <AccountBalanceWallet style={{ color: "#26abf2" }} />
              <UserDesc>
                Virtual Account: <Span>{searchUsers?.account_number}</Span>
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
                Referral Plan: <Span>{searchUsers?.referral_plan}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <Brush style={{ color: "#26abf2" }} />
              <UserDesc>
                Level: <Span>{searchUsers?.level}</Span>
              </UserDesc>
            </Desc>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  
  export default SearchProfile;
  