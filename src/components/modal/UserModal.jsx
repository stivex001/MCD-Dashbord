import { Lock, Logout, PersonPin, Settings } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/apiCalls";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
`;
const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.2);
  // height: 40vh;
  width: 170px;
  border-radius: 5px;
`;
const Title = styled.div`
  background-color: #605daf;
  padding: 12px 20px;
  border-radius: 2px;
`;
const H2 = styled.h2`
  font-size: 14px;
  color: #ffffff;
`;
const ListWrapper = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const List = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;
const Span = styled.span`
  color: #212529;
  font-size: 15px;
`;

const UserModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <H2>Welcome</H2>
        </Title>
        <ListWrapper>
          <List to="/profile/samji">
            <PersonPin style={{ color: "#95a5af" }} />
            <Span>Profile</Span>
          </List>
          <List to="/allsettings">
            <Settings style={{ color: "#95a5af" }} />
            <Span>Settings</Span>
          </List>
          <List to="#">
            <Lock style={{ color: "#95a5af" }} />
            <Span>Lock Screen</Span>
          </List>
          <List onClick={handleLogout}>
            <Logout style={{ color: "#95a5af" }} />
            <Span>Logout</Span>
          </List>
        </ListWrapper>
      </Wrapper>
    </Container>
  );
};

export default UserModal;
