import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 100%;
  ${tablet({ flexDirection: "column", gap: "0" })};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
export const Wrapperr = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
  ${tablet({ width: "70%" })};
`;
export const Left = styled.div`
  flex: 1.2;
`;
export const Right = styled.div`
  flex: 2;
`;
export const Ref = styled.p`
  color: #333265;
  font-size: 14px;
`;
export const InfoContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  gap:20px;
`;
export const InfoDesc = styled.div`
background-color: #775fd5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
export const InfoLeft = styled.div``;
export const InfoRight = styled.div``;
export const P = styled.p`
font-size: 24px;
color: #fff;
`;
export const Span = styled.span`
   font-size: 13px;
   color: #fff;
`;