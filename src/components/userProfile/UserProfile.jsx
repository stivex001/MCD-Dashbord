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

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("/profile/samji");
        console.log(res.data.data);
        setUser(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <UserImg
            src="https://mcd.5starcompany.com.ng/app/avatar/samji.JPG"
            alt=""
          />
          <CameraAlt style={{ fontSize: "20px" }} />
          <Username>Samji</Username>
          <Fullname>Odejinmi Samuel</Fullname>
          <Brandname> samji Ventures (superadmin)</Brandname>
        </Left>
        <Right>
          <Desc>
            <Phone style={{ color: "#26abf2" }} />
            <UserDesc>
              Phone: <Span>{user?.phoneno || "08166939205"}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <MailOutline style={{ color: "#26abf2" }} />
            <UserDesc>
              Email: <Span>{user?.email || "odejinmisamuel@gmail.com"}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <LocationOn style={{ color: "#26abf2" }} />
            <UserDesc>
              Location:{" "}
              <Span>{user?.address || "12 Akinbo area ogun Nigeria"}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              DOB: <Span>{user?.dob}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Reg.Date: <Span>{user?.reg_date || "2019-04-14 14:55:21"}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <CalendarToday style={{ color: "#26abf2" }} />
            <UserDesc>
              Last Login: <Span>{user?.last_login}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <AccountBalanceWallet style={{ color: "#26abf2" }} />
            <UserDesc>
              Virtual Account:{" "}
              <Span>{user?.account_number || "7445559331 | Wema bank"}</Span>
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
              Referral Plan: <Span>{user?.referral_plan || "larvae"}</Span>
            </UserDesc>
          </Desc>
          <Desc>
            <Brush style={{ color: "#26abf2" }} />
            <UserDesc>
              Level: <Span>{user?.level || "1"}</Span>
            </UserDesc>
          </Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
