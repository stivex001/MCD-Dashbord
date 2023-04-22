import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";

const P = styled.p`
  font-size: 14px;
  color: #333265;
`;

const PnlTables = ({
  report,
  pnlExpenses,
  combinedData,
  expensesCombinedData,
}) => {
  const total = report.data?.income_sum.toFixed(2);
  const totalExpenses = pnlExpenses.data?.expense_sum.toFixed(2);

  return (
    <div>
      <P>Total Income: {total}</P>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {combinedData &&
              combinedData.map((row, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f3f2f7" : "#ffffff",
                  }}
                >
                  <TableCell style={{ color: "#8887a9" }}>{row?.gl}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row?.gl_sum || "0.00"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Expenses */}

        <P style={{ marginTop: "30px" }}>Total Expenses: {totalExpenses}</P>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expensesCombinedData &&
                expensesCombinedData.map((row, index) => (
                  <TableRow
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f3f2f7" : "#ffffff",
                    }}
                  >
                    <TableCell style={{ color: "#8887a9" }}>
                      {row?.gl}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row?.gl_sum || "0.00"}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <P style={{ margin: "20px 0" }}>
            Net Income: {(total - totalExpenses).toFixed(2)}
          </P>
        </TableContainer>
      </TableContainer>
    </div>
  );
};

export default PnlTables;
