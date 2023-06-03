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
import SamGeneral from "../../components/General/SamGeneral";
import SamjiTransaction from "../Profile/SamjiTransaction";
import SamWallet from "../Profile/SamWallet";
import Information from "../../components/Information/Information";
import Nofication from "../../components/Notification/Notification";

const SamProfile = ({
  samji,
  userPerformance,
  isFetching,
  userWallet,
  setCurrentWalletPage,
  message,
}) => {
  const sam = samji[0];

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
          <SamGeneral samji={samji} userPerformance={userPerformance} />
        ) : currentPage === "transaction" ? (
          <SamjiTransaction />
        ) : currentPage === "wallet" ? (
          <SamWallet
            setCurrentWalletPage={setCurrentWalletPage}
            userWallet={userWallet}
            isFetching={isFetching}
          />
        ) : currentPage === "push-notification" ? (
          <Nofication />
        ) : (
          <Information
            samji={samji}
            isFetching={isFetching}
            message={message}
          />
        )}
      </div>
    </>
  );
};

export default SamProfile;
