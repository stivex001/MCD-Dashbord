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
import { getAllUsers } from "../../Redux/apiCalls";

const Container = styled.div``;
const UserDeatils = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
const Username = styled.p``;

const UserDataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { allUsers, isFetching } = useSelector((state) => state.user);

  useEffect(() => {
    getAllUsers(dispatch);
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
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Customer
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Contact No
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Wallet Balance
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Account Number
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers &&
              allUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8887a9" }}>
                      <UserDeatils>
                        <UserImg src={row.photo} alt="" />
                        <Username>{row.user_name}</Username>
                      </UserDeatils>
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.email}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.phoneno}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.wallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.account_number}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      <Link
                        to={"/profile/" + encodeURIComponent(row.user_name)}
                      >
                        <NoteAlt
                          style={{
                            backgroundColor: "5dd099",
                            color: "white",
                            padding: "4px 8px",
                            fontSize: "40px",
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
          count={allUsers && allUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default UserDataTable;
