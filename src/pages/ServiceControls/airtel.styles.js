import styled from "styled-components";
import { laptop } from "../../responsive";

export const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
`;
export const Wrapper = styled.div`
  padding: 20px;
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
  margin: 30px 0;
`;
