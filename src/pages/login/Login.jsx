import logo from "../../assets/mcd_logo.png";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://mcdn.wallpapersafari.com/medium/20/23/EPtx2X.jpg") center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  ${mobile({ width: "90%", height: "90%" })}
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const H3 = styled.h3`
  font-size: 28px;
  color: #4a4b4c;
  margin: 10px 0;
  ${mobile({ textAlign: "center" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${mobile({gap: '10px'})}
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 12px 0;
  padding: 6px 12px;
  outline-color: #605daf;
  ${mobile({padding: '12px'})}
`;
const Button = styled.button`
  padding: 6px 12px;
  background-color: #5dd099;
  color: #fff;
  font-size: 14px;
  margin: 12px 0;
  cursor: pointer;
  border: none;
  border-radius: 3px;
`;
const Remember = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const RemInput = styled.input``;
const Span = styled.span`
  font-size: 14px;
  color: #636466;
`;
const Fotter = styled.footer`
  font-size: 10.4px;
  color: #333265;
  margin: 20px 0;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Desc>
          <Img src={logo} alt="logo" />
          <H3>Welcome to Mega Cheap Data</H3>
        </Desc>
        <Form action="">
          <Input type="email" placeholder="admin..@abc.com" />
          <Input type="password" placeholder="password" />
          <Remember>
            <RemInput type="checkbox" name="check" id="check" />
            <Span>Remember Me</Span>
          </Remember>
          <Button>Login</Button>
        </Form>
        <Fotter>Powered by 5Star Company &copy; 2023</Fotter>
      </Wrapper>
    </Container>
  );
};

export default Login;
