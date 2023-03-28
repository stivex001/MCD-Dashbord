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
  import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUser } from "../../Redux/apiCalls";
  
  const UserProfiles = () => {
    
    const location = useLocation()
    const userId = Number(location.pathname.split('/')[2])
    const dispatch = useDispatch();
    console.log(userId);
    const users = false
//     const users = useSelector((state) =>
//     state.user.allUsers?.find((user) => user.id === userId)
//   );
  const allUsers = useSelector(state => state.user.allUsers)
    
  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);
  
    console.log(allUsers.id);
    return (
      <Container>
        <Wrapper>
          <Left>
            <UserImg
              src=""
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
                Phone: <Span>{users?.phoneno || "08166939205"}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <MailOutline style={{ color: "#26abf2" }} />
              <UserDesc>
                Email: <Span>{users?.email || "odejinmisamuel@gmail.com"}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <LocationOn style={{ color: "#26abf2" }} />
              <UserDesc>
                Location:{" "}
                <Span>{users?.address || "12 Akinbo area ogun Nigeria"}</Span>
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
                Reg.Date: <Span>{users?.reg_date || "2019-04-14 14:55:21"}</Span>
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
                Virtual Account:{" "}
                <Span>{users?.account_number || "7445559331 | Wema bank"}</Span>
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
                Referral Plan: <Span>{users?.referral_plan || "larvae"}</Span>
              </UserDesc>
            </Desc>
            <Desc>
              <Brush style={{ color: "#26abf2" }} />
              <UserDesc>
                Level: <Span>{users?.level || "1"}</Span>
              </UserDesc>
            </Desc>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  
  export default UserProfiles;
  