import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { pendingTransactions } from "../table/tableData";
import Button from "../UI/Button";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const Container = styled.div``;
const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
const BtnConatiner = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`;

const PendingTables = () => {

  const [pendingTrans, setPendingTrans] = useState([])

  useEffect(() => {
    const getPendingTransactions = async () => {
      try {
        const res = await userRequest.get('/transactions/pending')
      setPendingTrans(res.data)
      } catch (error) {
        console.log(error.message);
      }
      
    }
    getPendingTransactions()
    console.log(pendingTrans);
  },[pendingTrans])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc" }}>id</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Ref</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Amount</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Description</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Status</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Date</TableCell>
              <TableCell style={{ color: "#8281cc" }}>I.P </TableCell>
              <TableCell style={{ color: "#8281cc" }}>Server</TableCell>
              <TableCell style={{ color: "#8281cc" }}>
                Server Response
              </TableCell>
              <TableCell style={{ color: "#8281cc" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingTransactions.map((row) => (
              <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.ref}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  #{row.amount}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.username} {row.desc}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  <Span
                    style={{
                      backgroundColor: `${
                        row.status === "successful" ? "#33cdff" : "#f96e5b"
                      }`,
                    }}
                  >
                    {row.status}
                  </Span>
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.date}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.ip}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.server}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.serverRes}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  <BtnConatiner>
                    <Button title="Re-process" />
                    <Button title="Mark Delivered" />
                    <Button title="Reverse Transaction" />
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

export default PendingTables;
