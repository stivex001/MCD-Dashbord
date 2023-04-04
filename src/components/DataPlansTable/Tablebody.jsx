import { TableBody, TableCell, TableRow } from "@mui/material";
import styled from "styled-components";
// import { mtnData } from "./dataPlans";

const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
const BtnConatiner = styled.div`
  background-color: #aaaece;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;

const Tablebody = ({
  id,
  network,
  name,
  price,
  yourprice,
  server,
  action,
  status,
  date,
  discount,
  type,
}) => {
  return (
    <TableBody>
      <TableRow
        key={id}
        style={{
          backgroundColor: id % 2 === 0 ? "#ffffff" : "#f3f2f7",
        }}
      >
        <TableCell style={{ color: "#8887a9" }}>{id}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>{network}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>{name}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>&#8358;{price}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>&#8358;{yourprice}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>{discount}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>{server}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>
          <Span
            style={{
              backgroundColor: `${status === 1 ? "#5dd099" : "#f8c955"}`,
            }}
          >
            {status === 1 ? 'Active' : 'Inactive'}
          </Span>
        </TableCell>

        <TableCell style={{ color: "#8887a9" }}>{date}</TableCell>
        <TableCell style={{ color: "#8887a9" }}>
          <BtnConatiner>Modify</BtnConatiner>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Tablebody;
