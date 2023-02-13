import { Search } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const LogoContainer = styled.div``;
const Logo = styled.div``;
const LogoImg = styled.img``;
const LogoTitle = styled.span``;
const BarSearch = styled.div``;
const Input = styled.input``;
const ImgContainer = styled.div``;
const UserImg = styled.img``;

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
            <Search />
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