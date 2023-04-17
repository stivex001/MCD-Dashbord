import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PnlTables = ({ report }) => {
  return (
    <div>
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
            {report &&
              report.map((row) => (
                <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                  <TableCell style={{ color: "#8887a9" }}>{row.name}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.sum}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.count}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PnlTables;
