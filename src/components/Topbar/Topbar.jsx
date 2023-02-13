import { Search } from "@mui/icons-material";
import {
  BarSearch,
  Container,
  ImgContainer,
  Input,
  Logo,
  LogoContainer,
  LogoImg,
  LogoTitle,
  UserImg,
  Wrapper,
} from "./topbar.styles";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <BarSearch>
            <Input type="text" placeholder="Search..." />
            <Search style={{ color: "white", fontSize: "20px" }} />
          </BarSearch>
        </LogoContainer>
        <ImgContainer>
          <UserImg
            src="https://avatars.githubusercontent.com/u/87942124?v=4"
            alt=""
          />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
