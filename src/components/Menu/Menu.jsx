import {
  AccountBalanceWalletOutlined,
  AttachMoney,
  CreditCardOffOutlined,
  DashboardOutlined,
  EventAvailableOutlined,
  GroupOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  ReceiptOutlined,
  Report,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkList from "../Linklist/LinkList";

const Container = styled.div`
  margin: 20px;
`;
const Wrapper = styled.div`
  margin: 20px 0;
`;
const LinkMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const UnListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #98a8b2;
`;
const ListItem = styled.li`
  list-style: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #98a8b2;
  &:active {
    background-color: rgb(240, 240, 255);
  }

  &:hover {
    color: #706db7;
  }
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
const Heading = styled.span`
  // margin-bottom: 20px ;
  color: #555;
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

const Menu = () => {
  return (
    <Container>
      <Heading>Main</Heading>
      <Wrapper>
        <LinkMenu>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <UnListItem>
              <DashboardOutlined
                style={{
                  marginRight: "5px",
                  fontSize: "20px",
                  color: "#98a8b2",
                }}
              />
              <Span>Dashboard</Span>
            </UnListItem>
          </Link>
          <ListItem>
            <LinkList  />
          </ListItem>

          {/* <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <AccountBalanceWalletOutlined style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Wallet</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <GroupOutlined style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Users</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <EventAvailableOutlined style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Verification</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <AttachMoney style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Virtual Accounts</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <CreditCardOffOutlined  style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Payment Links</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <Settings style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Services Control</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <Settings style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Reseller Control</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <Report style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Reports</Span>
            </ListItem>
            </Link>
             */}
        </LinkMenu>
      </Wrapper>
    </Container>
  );
};

export default Menu;
