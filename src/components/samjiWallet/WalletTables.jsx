import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { TablePagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getWalletList } from "../../Redux/apiCalls";

const Container = styled.div``;


const WalletTables = () => {
  const {walletList} = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  

  useEffect(() => {
    getWalletList(dispatch);
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log(walletList);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                id
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Amount
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Medium
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Reference
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                O.Wallet
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                N.Wallet
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Version
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {walletList && walletList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                  <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.user_name}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    #{row.amount}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.status}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.i_wallet}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.ref}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.i_wallet}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.i_wallet}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.version}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 15, 100]}
          component="div"
          count={walletList && walletList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default WalletTables;
