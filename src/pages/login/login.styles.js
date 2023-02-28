import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://mcdn.wallpapersafari.com/medium/20/23/EPtx2X.jpg") center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  height: 80%;
  border-radius: 5px;
  ${mobile({ width: "90%", height: "90%" })}
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
export const H3 = styled.h3`
  font-size: 28px;
  color: #4a4b4c;
  margin: 10px 0;
  ${mobile({ textAlign: "center" })}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${mobile({gap: '10px'})}
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 12px 0;
  padding: 12px;
  outline-color: #605daf;
`;
export const Button = styled.button`
  padding: 12px;
  background-color: #5dd099;
  color: #fff;
  font-size: 14px;
  margin: 12px 0;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
export const Remember = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;
export const RemInput = styled.input``;
export const Span = styled.span`
  font-size: 14px;
  color: #636466;
`;
export const Fotter = styled.footer`
  font-size: 10.4px;
  color: #333265;
  margin: 30px 0;
`;
export const ErrorWrapper = styled.div`
background-color: #fedbd6;
margin-bottom: 16px;
padding: 12px 20px;
`;
export const ErrTitle = styled.p`
font-size: 14px;
color: #f96e5b;
font-weight: bold;
`;
export const ErrSpan = styled.span`
font-size: 14px;
color: #f96e5b;
`;