import { AccountBalanceWalletOutlined, ArrowForwardIosOutlined, AttachMoney, CreditCardOffOutlined, DashboardOutlined, EventAvailableOutlined, GroupOutlined, ReceiptOutlined, Report, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const ListItem = styled.li`
display: flex;
align-items: center;
gap: 20px;
padding: 5px;
cursor: pointer;
border-radius: 10px;
font-size: 15px;
font-weight: 500;
color: "#98a8b2"
&:active {
  background-color: rgb(240, 240, 255);
}

&:hover {
  background-color: #706db7;
}
`;
const Heading = styled.span`
// margin-bottom: 20px ;
color: #555;
`;
const Span = styled.span`
color: #33404d
`;

const Menu = () => {
  return (
    <Container>
        <Heading>Main</Heading>
        <Wrapper>
            <LinkMenu>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Dashboard</Span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <ReceiptOutlined style={{ marginRight: "5px", fontSize: "20px", color: "#98a8b2" }} />
                <Span>Transactions</Span>
                <ArrowForwardIosOutlined />
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
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
            
            </LinkMenu>
        </Wrapper>
    </Container>
  )
}

export default Menu