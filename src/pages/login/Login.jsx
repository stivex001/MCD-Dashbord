import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/mcd_logo.png";
import { login, logout } from "../../Redux/apiCalls";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { currentUser, isFetching, error, message } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    if (currentUser === "null") {
      dispatch(logout());
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [currentUser, navigate, dispatch]);

  useEffect(() => {
    const persistedData = localStorage.getItem("persist:root");

    if (!persistedData) {
      console.log("No persisted data found in localStorage.");
      // Handle the case when no persisted data is found
    }

    const user = JSON.parse(persistedData)?.user;
    const token = user?.currentUser?.token;

    console.log(token);

    if (!token) {
      console.log("The token is not found in localStorage.");
      dispatch(logout());
      navigate("/login");
    }

    const tokenParts = token?.split("|");

    if (tokenParts?.length === 2) {
      const expirationTimestamp = parseInt(tokenParts[0]);
      const expirationDate = new Date(expirationTimestamp * 1000);

      if (expirationDate < new Date()) {
        console.log("The token has expired.");
        dispatch(logout());
        navigate("/login");
      } else {
        console.log("The token is still valid.");
        navigate("/");
      }
    } else {
      dispatch(logout());
    }
  }, [dispatch, navigate]);

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

          {message && <ErrTitle>You have successfully logout</ErrTitle>}

          <Input
            name="email"
            type="email"
            placeholder="admin..@abc.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Remember>
            <RemInput type="checkbox" name="check" id="check" />
            <Span>Remember Me</Span>
          </Remember>
          <Button type="submit">
            {isFetching ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </Button>
        </Form>
        <Fotter>Powered by 5Star Company &copy; 2023</Fotter>
      </Wrapper>
    </Container>
  );
};

export default Login;
