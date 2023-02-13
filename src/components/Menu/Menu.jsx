import { DashboardOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
margin: 20px;
`;
const Wrapper = styled.div`
// margin: 20px;
`;
const LinkMenu = styled.ul`
margin-bottom: 10px;
`;
const ListItem = styled.li`
display: flex;
align-items: center;
gap: 20px;
padding: 5px;
cursor: pointer;
border-radius: 10px;
font-size: 15px;
&:active {
  background-color: rgb(240, 240, 255);
}

&:hover {
  color: #706db7;
}
`;
const Heading = styled.span`
margin-bottom: 20px ;
color: #555;
`;

const Menu = () => {
  return (
    <Container>
        <Heading>Main</Heading>
        <Wrapper>
            <LinkMenu>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Dashboard</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Transactions</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Wallet</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Users</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Verification</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Virtual Accounts</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Payment Links</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Services Control</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Reseller Control</span>
            </ListItem>
            </Link>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Reports</span>
            </ListItem>
            </Link>
            
            </LinkMenu>
        </Wrapper>
    </Container>
  )
}

export default Menu