import styled from "styled-components";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const Container = styled.div`
margin: 20px 10px;
`;
const P = styled.p`
margin: 14px 0;
color: #8887a9;
font-size: 14px;
text-align: center;
`;

const PaymentLinksTable = () => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc" }}>Reseller Reference</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Amount</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Customer Email</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Reference</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Date</TableCell>
              <TableCell style={{ color: "#8281cc" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          
               <P>No Data Available in table</P>
       
          {/* <TableBody>
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
          </TableBody> */}
        </Table>
      </TableContainer>
    </Container>
  )
}

export default PaymentLinksTable