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
import { Link } from "react-router-dom";
import { NoteAlt } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getTransHistoryData } from "../../Redux/apiCalls";

const Container = styled.div``;
const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;

const Tables = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { transHistory, isFetching } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getTransHistoryData(dispatch);
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>id</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Username</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Amount</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Description</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Status</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>I.Wallet</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>F.Wallet </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>I.p</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Server</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Ref</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Date</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Note</TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transHistory &&
              transHistory
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.user_name}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      &#8358;{row.amount}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.description}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      <Span
                        style={{
                          backgroundColor: `${
                            row.status === "successful"
                              ? "#33cdff"
                              : row.status === "pending"
                              ? "#f96e5b"
                              : "#5dd099"
                          }`,
                        }}
                      >
                        {row.status}
                      </Span>
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.i_wallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.f_wallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.ip_address}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.server}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.ref}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.date}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.note}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      <Link to={"/users"}>
                        <NoteAlt
                          style={{
                            backgroundColor: "5dd099",
                            color: "white",
                            padding: "4px 8px",
                            fontSize: "30px",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 15, 100]}
          component="div"
          count={transHistory && transHistory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default Tables;
