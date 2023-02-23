import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
padding: 20px;
`;
export const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const H3 = styled.h3`
  font-size: 18px;
  color: #4a4b4c;
`;
export const DescP = styled.p`
  font-size: 14px;
  color: #8c9ea9;
  ${mobile({ display: "none" })};
`;
export const DescSpan = styled.span`
  font-size: 14px;
  color: #6c757d;
`;
export const TransList = styled.div`
background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba(235, 180, 180, 0.47);
  padding: 20px;
`;

export const Title = styled.span`
font-size: 16px;
color: #4a4b4c;
margin-bottom: 15px;
`;
export const BtnConatiner = styled.div`
display: flex;
gap: 5px;
flex-wrap: wrap;
`;
export const P = styled.p`
margin: 20px 0;
color: #8c9ea9;
font-size: 13px;
`

;
export const Span = styled.span`
font-size: 11.375px;
color: #33cdff;
`;