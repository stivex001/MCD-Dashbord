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
} from "../../components/userProfile/userProfile.styles";
import { useState } from "react";
import UserGeneral from "../../components/General/UserGeneral";
import ProfileTransaction from "../Profile/ProfileTransaction";
import ProfileWallet from "../Profile/ProfileWallet";
import Nofication from "../../components/Notification/Notification";
import Information from "../../components/Information/Information";

const UserProfiles = ({ users, userPerformance, isFetching, message }) => {
  const [currentPage, setCurrentPage] = useState("general");
  const [activeButton, setActiveButton] = useState("general");

  const handleClick = (page) => {
    setCurrentPage(page);
    setActiveButton(page);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <UserImg src={users?.photo} alt="" />
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
        <List>
          <Btn
            onClick={() => handleClick("general")}
            className={activeButton === "general" ? "active" : ""}
          >
            General
          </Btn>

          <Btn
            onClick={() => handleClick("transaction")}
            className={activeButton === "transaction" ? "active" : ""}
          >
            Transaction
          </Btn>

          <Btn
            onClick={() => handleClick("wallet")}
            className={activeButton === "wallet" ? "active" : ""}
          >
            Wallet
          </Btn>

          <Btn
            onClick={() => handleClick("push-notification")}
            className={activeButton === "push-notification" ? "active" : ""}
          >
            Push Notification
          </Btn>

          <Btn
            onClick={() => handleClick("information")}
            className={activeButton === "information" ? "active" : ""}
          >
            Information
          </Btn>
        </List>
      </Container>
      <div>
        {currentPage === "general" ? (
          <UserGeneral users={users} userPerformance={userPerformance} />
        ) : currentPage === "transaction" ? (
          <ProfileTransaction users={users} />
        ) : currentPage === "wallet" ? (
          <ProfileWallet users={users} />
        ) : currentPage === "push-notification" ? (
          <Nofication />
        ) : (
          <Information
            users={users}
            isFetching={isFetching}
            message={message}
          />
        )}
      </div>
    </>
  );
};

export default UserProfiles;
