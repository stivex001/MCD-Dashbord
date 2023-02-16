import logo from "../../assets/mcd_logo.png";
import { Button, Container, Desc, Form, Fotter, H3, Img, Input, Remember, RemInput, Span, Wrapper } from "./login.styles";


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
