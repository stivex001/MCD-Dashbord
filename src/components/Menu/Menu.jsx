import { DashboardOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const LinkMenu = styled.ul``;
const ListItem = styled.li``;

const Menu = () => {
  return (
    <Container>
        <span>Main</span>
        <Wrapper>
            <LinkMenu>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Dashboard</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Transactions</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Wallet</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Users</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Verification</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Virtual Accounts</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Payment Links</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Services Control</span>
            </ListItem>
            </Link>
            <Link to='/'>
            <ListItem>
                <DashboardOutlined />
                <span>Reseller Control</span>
            </ListItem>
            </Link>
            <Link to='/'>
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