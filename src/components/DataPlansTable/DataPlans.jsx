import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { mtnData } from "./dataPlans";

const Container = styled.div`
margin: 30px 0;
`;
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

const DataPlans = ({id, network, product, price, yourPrice, server, status, date, action}) => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc" }}>{id}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{network}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{product}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{price}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{yourPrice}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{server}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{status} </TableCell>
              <TableCell style={{ color: "#8281cc" }}>{date}</TableCell>
              <TableCell style={{ color: "#8281cc" }}>{action}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mtnData.map((row) => (
              <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.name}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.name}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.price}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.yourprice}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.server}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  <Span
                    style={{
                      backgroundColor: `${
                        row.status === "Active" ? "#5dd099" : "#f8c955"
                      }`,
                    }}
                  >
                    {row.status}
                  </Span>
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.date}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  <BtnConatiner>
                    {row.action}
                  </BtnConatiner>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DataPlans;
