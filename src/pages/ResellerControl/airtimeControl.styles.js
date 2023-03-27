import { Link } from "react-router-dom";
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
export const BtnConatiner = styled(Link)`
  background-color: #aaaece;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;

  &:hover {
    background-color: rgba(170,174,206,0.7);
  }
`;
export const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
