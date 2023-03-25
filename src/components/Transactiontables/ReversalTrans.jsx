import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Container, Left, Right, Title } from "./reversal.styles";

const ReversalTrans = ({ searchReversal }) => {
  const row = searchReversal.data.tran;
  return (
    <Container>
      <Left>
        <Title>Transaction</Title>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  #
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Amount
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Username
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.description}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.amount}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.user_name}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Left>
      <Right>
        <Title>Reversal</Title>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  #
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Amount
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Username
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  Being reversal of {row.description}
                </TableCell>
                <TableCell style={{ color: "#8887a9" }}>{row.amount}</TableCell>
                <TableCell style={{ color: "#8887a9" }}>
                  {row.user_name}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Right>
    </Container>
  );
};

export default ReversalTrans;
