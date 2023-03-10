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
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { userRequest } from "../../requestMethods";
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
} from "./userProfile.styles";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  // const location = useLocation()
  // const userId = location.pathname.split('/')[2];

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("/profile/samji");
        console.log(res);
        setUser(res.data.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

//   if (!user) {
//     return <div>Loading....</div>;
//   }

  //   const registeredUser = user.length > 0 ? user.find((reg) => reg.user_name === userId) : null;

  // console.log(registeredUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <UserImg src={user.photo} alt="" />
          <CameraAlt />
          <Username>{user.user_name}</Username>
          <Fullname>Odejinmi Samuel</Fullname>
          <Brandname> ({user.status})</Brandname>
        </Left>
        <Right>
          <Desc>
            <Phone style={{ color: "#26abf2" }} />
            <UserDesc>
              Phone: <Span>{user.phoneno}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <MailOutline style={{ color: "#26abf2" }} />
            <UserDesc>
              Email: <Span>{user.email}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <LocationOn style={{ color: "#26abf2" }} />
            <UserDesc>
              Location: <Span>{user.address}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              DOB: <Span>{user.dob}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Reg.Date: <Span>{user.reg_date}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Last Login: <Span>{user.last_login}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <AccountBalanceWallet style={{ color: "#26abf2" }} />
            <UserDesc>
              Virtual Account: <Span>{user.account_number}</Span>
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
              Referral Plan: <Span>{user.referral_plan}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Level: <Span>{user.level}</Span>
            </UserDesc>
          </Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
