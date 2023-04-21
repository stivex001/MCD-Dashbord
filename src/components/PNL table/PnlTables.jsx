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

// const Container = styled.div`
//   display: flex;
//   background-color: #f3f2f7;
//   padding: 15px 10px;
// `;
// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;
// const Title = styled.p`
//   color: #8281cc;

//   font-weight: bold;
//   font-size: 14px;
//   margin-bottom: 20px;
// `;

// const SpanContainer = styled.div`
// display: flex;
// flex-direction: column;
// gap: 20px;
// `;

// const Span = styled.span`
//   color: #8887a9;
//   font-size: 14px;
//   /* padding: 20px 0px; */
// `;

const PnlTables = ({ report, pnlExpenses, pnlGl }) => {
  const data = report.data?.income_gls;
  const total = report.data?.income_sum.toFixed(2);
  const expenses = pnlExpenses.data?.expense_gls;
  const totalExpenses = pnlExpenses.data?.expense_sum.toFixed(2);

  const amounts = data?.map((row) => {
    const glValue = row.gl;
    // console.log(typeof(glValue));
    const pnlRow = Array.isArray(pnlGl)
      ? pnlGl.find((pnlRow) => pnlRow.gl === glValue)
      : null;

    const sum = pnlRow?.gl_sum ?? 0;
    return sum.toFixed(2);
  });

  const expenseAmounts = expenses?.map((row) => {
    const glValue = row.gl;
    // console.log(typeof(glValue));
    const pnlRow = Array.isArray(pnlGl)
      ? pnlGl.find((pnlRow) => pnlRow.gl === glValue)
      : null;

    const sum = pnlRow?.gl_sum ?? 0;
    return sum.toFixed(2);
  });
  // console.log(pnlGl);
  return (
    <div>
      <P>Total Income: {total}</P>

      {/* <Container>
        <Left>
          <Title>Name</Title>
          <SpanContainer>
            {data && data.map((row, index) => (
              <Span key={index} style={{
                backgroundColor: index % 2 === 0 ? "#f3f2f7" : "#ffffff",
              }}>{row.gl}</Span>
            ))}
            
          </SpanContainer>
        </Left>
        <Right>
          <Title>Amount</Title>
        </Right>
      </Container> */}

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
            {data &&
              data.map((row, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f3f2f7" : "#ffffff",
                  }}
                >
                  <TableCell style={{ color: "#8887a9" }}>{row.gl}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.gl === "Data" ? pnlGl.data.gl_sum : "0.00"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Expenses */}

        <P style={{ marginTop: "30px" }}>Total Expenses: {totalExpenses}</P>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              {expenses &&
                expenses.map((row, index) => (
                  <TableRow
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f3f2f7" : "#ffffff",
                    }}
                  >
                    <TableCell style={{ color: "#8887a9" }}>{row.gl}</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.gl === "Data" ? pnlGl.data.gl_sum : "0.00"}
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
