import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import logo from "../../assets/mcd_logo.png";
import { login } from "../../Redux/apiCalls";
import {
  Button,
  Container,
  Desc,
  ErrorWrapper,
  ErrSpan,
  ErrTitle,
  Form,
  Fotter,
  H3,
  Img,
  Input,
  Remember,
  RemInput,
  Span,
  Wrapper,
} from "./login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  // const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    if (username.trim() === "" && password === "") {
      return;
    }

    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Desc>
          <Img src={logo} alt="logo" />
          <H3>Welcome to Mega Cheap Data</H3>
        </Desc>
        <Form onSubmit={handleClick}>
          {error && (
            <ErrorWrapper>
              <ErrTitle>These credentails do not match our records!</ErrTitle>
              <ErrSpan>Change a few things up and try submitting again</ErrSpan>
            </ErrorWrapper>
          )}

          <Input
            type="email"
            placeholder="admin..@abc.com"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Remember>
            <RemInput type="checkbox" name="check" id="check" />
            <Span>Remember Me</Span>
          </Remember>
          <Button disabled={isFetching}>Login</Button>
        </Form>
        <Fotter>Powered by 5Star Company &copy; 2023</Fotter>
      </Wrapper>
    </Container>
  );
};

export default Login;
