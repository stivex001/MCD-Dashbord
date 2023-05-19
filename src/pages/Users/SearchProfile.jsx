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
import SearchGeneral from "../../components/General/SearchGeneral";
import SearchTransaction from "../Profile/SearchTransaction";
import SearchWallet from "../Profile/SearchWallet";
import Nofication from "../../components/Notification/Notification";
import SearchInformation from "../Profile/SearchInformation";

const SearchProfile = ({
  searchUsers,
  userPerformance,
  userTrans,
  isFetching,
  currentTransPage,
  setCurrentTransPage,
  setCurrentWalletPage,
  userWallet,
  message,
}) => {
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
            <UserImg src={searchUsers?.photo} alt="" />
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
          <SearchGeneral
            searchUsers={searchUsers}
            userPerformance={userPerformance}
          />
        ) : currentPage === "transaction" ? (
          <SearchTransaction
            userTrans={userTrans}
            isFetching={isFetching}
            currentTransPage={currentTransPage}
            setCurrentTransPage={setCurrentTransPage}
          />
        ) : currentPage === "wallet" ? (
          <SearchWallet
            setCurrentWalletPage={setCurrentWalletPage}
            userWallet={userWallet}
          />
        ) : currentPage === "push-notification" ? (
          <Nofication />
        ) : (
          <SearchInformation
            users={searchUsers}
            isFetching={isFetching}
            message={message}
          />
        )}
      </div>
    </>
  );
};

export default SearchProfile;
