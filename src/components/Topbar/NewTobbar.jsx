import { Search } from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #605daf;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const LogoTitle = styled.span``;
// const Center = styled.div``;
const BarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #7471b9;
  border-radius: 50px;
  border: 1px solid #605daf;
  padding: 5px 20px;
  cursor: pointer;
  ${tablet({ padding: "5px" })};
  ${mobile({ display: "none" })};
`;
const Input = styled.input`
  border: none;
  background-color: #7471b9;
  outline: none;
  color: white;

  ::placeholder {
    color: white;
  }
`;
const Right = styled.div``;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const NewTobbar = () => {
  return (
    <Container>
      <Left>
        <LogoTitle>MCD DASHBOARD</LogoTitle>
        <BarSearch>
          <Input type="text" placeholder="Search..." />
          <Search style={{ color: "white", fontSize: "20px" }} />
        </BarSearch>
      </Left>
      <Right>
        <UserImg
          src="https://avatars.githubusercontent.com/u/87942124?v=4"
          alt=""
        />
      </Right>
    </Container>
  );
};

export default NewTobbar;
