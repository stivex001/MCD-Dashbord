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