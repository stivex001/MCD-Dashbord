import styled from "styled-components";
import UserDataTable from "./UserDataTable";

const Container = styled.div`
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba(235, 180, 180, 0.47);
  padding: 20px;
`;

const Title = styled.h3`
font-size: 16px;
color: #4a4b4c;
margin-bottom: 15px;
`;
const P = styled.p`
color: #8c9ea9;
font-size: 13px;
margin-bottom: 24px;
`;
const Span = styled.span`
color: #33cdff;
`;

const UserTable = () => {
  return (
    <Container>
        <Title>Users Table</Title>
        <P>Use <Span>pencil icon</Span> to view user profile</P>
        <UserDataTable />
    </Container>
  )
}

export default UserTable