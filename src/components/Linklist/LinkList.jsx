import {
  AccountBalanceWalletOutlined,
  GroupOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { transactions, Users, wallets } from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Span = styled.span`
  color: #33404d;
`;
const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 40px;
`;

const LinkList = ({ icon, to, desc }) => {
  const [showTransactions, setShowTransactions] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const handleTransClick = () => {
    setShowTransactions(!showTransactions);
  };

  const handleWalletClick = () => {
    setShowWallets(!showWallets);
  };
  const handleUserClick = () => {
    setShowUsers(!showUsers);
  };

  return (
    <Container>
      <ListItemWrapper>
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
          <KeyboardArrowDownOutlined onClick={handleTransClick} />
        ) : (
          <KeyboardArrowRightOutlined onClick={handleTransClick} />
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
    </Container>
  );
};

export default LinkList;
