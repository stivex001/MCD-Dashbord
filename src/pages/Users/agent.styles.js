import { Link } from "react-router-dom";
import styled from "styled-components";
import { laptop, mobile } from "../../responsive";

export const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
`;
export const Wrapper = styled.div`
  padding: 20px;
  height: 74vh;
`;
export const TableWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const P = styled.p`
  font-size: 13px;
  color: #8c9ea9;
`;
export const Details = styled.div`
  margin: 10px 0;
`;
export const BtnConatiner = styled(Link)`
  background-color: #aaaece;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
`;
export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  ${mobile({ flexDirection: "column", gap: '10px' })};
`;
export const SearchAgent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const SearchDesc = styled.p`
font-size: 14px;
color: #636466;
`;
export const Action = styled.div`
  display: flex;
  align-items: center;
`;
export const ActionList = styled.div`
  background-color: #aaaece;
  padding: 6px 12px;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(170, 174, 206, 0.8);
  }
`;
export const Input = styled.input`
padding: 8px;
outline-color: #827fc2;
`;
export const Column = styled.div`
  display: flex;
  align-items: center;
  background-color: #aaaece;
  padding: 2.3px 12px;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ padding: "2.3px" })};

  &:hover {
    background-color: rgba(170, 174, 206, 0.8);
  }
`;
export const ActionListCol = styled.div``;

export const AgentDesc = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
export const Img = styled.img`
width: 32px;
height: 32px;
`;