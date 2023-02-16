import {
  AccountBalanceWalletOutlined,
  AttachMoney,
  EventAvailableOutlined,
  GroupOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  ReceiptOutlined,
  Report,
  Settings,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  reports,
  resellers,
  services,
  transactions,
  Users,
  verifications,
  wallets,
} from "./data";
import {
  AccordionList,
  Container,
  ListContent,
  ListItemWrapper,
  Span,
  UnListItem,
} from "./link.styles";

const LinkList = ({ icon, to, desc }) => {
  const [showTransactions, setShowTransactions] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showVerifications, setShowVerifications] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showReseller, setShowReseller] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleTransClick = () => {
    if (showWallets) {
      setShowWallets(!showWallets);
    }
    setShowTransactions(!showTransactions);
  };

  const handleWalletClick = () => {
    if (showTransactions) {
      setShowTransactions(!showTransactions);
    }
    setShowWallets(!showWallets);
  };

  const handleUserClick = () => {
    if (showWallets) {
      setShowWallets(!showWallets);
    }
    setShowUsers(!showUsers);
  };

  const handleVerification = () => {
    if (showUsers) {
      setShowUsers(!showUsers);
    }
    setShowVerifications(!showVerifications);
  };
  const handleService = () => {
    if (showVerifications) {
      setShowVerifications(!showVerifications);
    }
    setShowServices(!showServices);
  };
  const handleReseller = () => {
    if (showServices) {
      setShowServices(!showServices);
    }
    setShowReseller(!showReseller);
  };
  const handleReport = () => {
    if (showReseller) {
      setShowReseller(!showReseller);
    }
    setShowReport(!showReport);
  };

  return (
    <Container>
      <ListItemWrapper onClick={handleTransClick}>
        <ListContent>
          <ReceiptOutlined
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Transactions</Span>
        </ListContent>
        {showTransactions ? (
          <KeyboardArrowDownOutlined  />
        ) : (
          <KeyboardArrowRightOutlined  />
        )}
      </ListItemWrapper>

      {showTransactions && (
        <AccordionList>
          {transactions.map((transaction) => (
            <Link
              key={transaction.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={transaction.to}
            >
              {transaction.title}
            </Link>
          ))}
        </AccordionList>
      )}

      <ListItemWrapper>
        <ListContent>
          <AccountBalanceWalletOutlined
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Wallet</Span>
        </ListContent>
        {showWallets ? (
          <KeyboardArrowDownOutlined onClick={handleWalletClick} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleWalletClick} />
        )}
      </ListItemWrapper>

      {showWallets && (
        <AccordionList>
          {wallets.map((wallet) => (
            <Link
              key={wallet.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={wallet.to}
            >
              {wallet.title}
            </Link>
          ))}
        </AccordionList>
      )}

      <ListItemWrapper>
        <ListContent>
          <GroupOutlined
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Users</Span>
        </ListContent>
        {showUsers ? (
          <KeyboardArrowDownOutlined onClick={handleUserClick} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleUserClick} />
        )}
      </ListItemWrapper>

      {showUsers && (
        <AccordionList>
          {Users.map((user) => (
            <Link
              key={user.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={user.to}
            >
              {user.title}
            </Link>
          ))}
        </AccordionList>
      )}

      <ListItemWrapper>
        <ListContent>
          <EventAvailableOutlined
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Verification</Span>
        </ListContent>
        {showVerifications ? (
          <KeyboardArrowDownOutlined onClick={handleVerification} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleVerification} />
        )}
      </ListItemWrapper>

      {showVerifications && (
        <AccordionList>
          {verifications.map((verification) => (
            <Link
              key={verification.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={verification.to}
            >
              {verification.title}
            </Link>
          ))}
        </AccordionList>
      )}

      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to="/virtual-accounts"
      >
        <UnListItem>
          <AttachMoney
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Virtual Accounts</Span>
        </UnListItem>
      </Link>

      <ListItemWrapper>
        <ListContent>
          <Settings
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Services Control</Span>
        </ListContent>
        {showServices ? (
          <KeyboardArrowDownOutlined onClick={handleService} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleService} />
        )}
      </ListItemWrapper>

      {showServices && (
        <AccordionList>
          {services.map((service) => (
            <Link
              key={service.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={service.to}
            >
              {service.title}
            </Link>
          ))}
        </AccordionList>
      )}

      <ListItemWrapper>
        <ListContent>
          <Settings
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Reseller Control</Span>
        </ListContent>
        {showReseller ? (
          <KeyboardArrowDownOutlined onClick={handleReseller} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleReseller} />
        )}
      </ListItemWrapper>

      {showReseller && (
        <AccordionList>
          {resellers.map((reseller) => (
            <Link
              key={reseller.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={reseller.to}
            >
              {reseller.title}
            </Link>
          ))}
        </AccordionList>
      )}

      <ListItemWrapper>
        <ListContent>
          <Report
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "#98a8b2",
            }}
          />
          <Span>Report</Span>
        </ListContent>
        {showReport ? (
          <KeyboardArrowDownOutlined onClick={handleReport} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleReport} />
        )}
      </ListItemWrapper>

      {showReport && (
        <AccordionList>
          {reports.map((report) => (
            <Link
              key={report.id}
              style={{ textDecoration: "none", color: "#6d6a71" }}
              to={report.to}
            >
              {report.title}
            </Link>
          ))}
        </AccordionList>
      )}
    </Container>
  );
};

export default LinkList;
