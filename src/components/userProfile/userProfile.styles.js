import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 10px;
`;
export const Wrapper = styled.div`
  background-color: #181b2c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  color: white;
  ${mobile({ flexDirection: "column", alignItems: "flex-start", gap: "40px" })};
`;
export const Left = styled.div``;
export const UserImg = styled.img``;
export const Username = styled.p`
  font-size: 24px;
`;
export const Fullname = styled.p``;
export const Brandname = styled.span`
  font-size: 13px;
  color: #8c9ea9;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Desc = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const UserDesc = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
export const Span = styled.span`
  font-weight: 400;
`;
export const List = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  display: flex;
  gap: 20px;
`;
export const Btn = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({ active }) => active ? '#605daf' : 'white'};
  color: ${({ active }) => active ? 'white' : 'black'};


`;
export const ActiveButton = styled(Btn)`
  background-color: red; 
`;

