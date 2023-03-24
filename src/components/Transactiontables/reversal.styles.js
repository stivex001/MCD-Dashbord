import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 50px;
  ${tablet({ flexDirection: "column" })};
`;
export const Left = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const Right = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
export const Title = styled.p`
  font-size: 13px;
  color: #333265;
`;
export const TableContain = styled.table`
  margin: 20px 0;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeads = styled.thead`
  background-color: #f3f2f7;
  border: 1px solid #ddd;
`;

export const TableBodys = styled.tbody`
  background-color: #f6f6f9;
`;

export const TableRows = styled.tr`
  &:nth-child(even) {
    background-color: #f3f2f7;
  }
`;
export const TableCells = styled.td`
  padding: 12px;
  border: none;
  color: #8281cc;
  font-size: 14px;
`;
export const TableCellB = styled.td`
  color: #8887a9;
  padding: 14px 12px;
  font-size: 14px;
`;
