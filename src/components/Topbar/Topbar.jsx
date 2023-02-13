import { Search } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 50px;
position: sticky;
top: 0;
left: 0;
background-color:#605daf;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
`;
const LogoContainer = styled.div`
display: flex;
align-items: center;
`;
const Logo = styled.div`
margin-right: 50px;
display: flex;
align-items: center;
`;
const LogoImg = styled.img`
width: 20px;
height: 20px;
margin-right: 5px;
`;
const LogoTitle = styled.span`
color: white;
font-size: 700;
`;
const BarSearch = styled.div`
display: flex;
align-items: center;
background-color: #7471b9;
border-radius: 50px;
border: 1px solid #605daf;
padding: 5px 20px;
cursor: pointer;
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
const ImgContainer = styled.div``;
const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo>
            <LogoImg src="" alt="" />
            <LogoTitle>MCD DASHBOARD</LogoTitle>
          </Logo>
          <BarSearch>
            <Input type="text" placeholder="Search..." />
            <Search style={{color: 'white', fontSize: '20px'}} />
          </BarSearch>
        </LogoContainer>
        <ImgContainer>
          <UserImg src="https://avatars.githubusercontent.com/u/87942124?v=4" alt="" />
        </ImgContainer>
      </Wrapper>
    </Container>
  )
}

export default Topbar