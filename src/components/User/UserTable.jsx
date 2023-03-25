import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { NoteAlt } from "@mui/icons-material";
import {
  Container,
  P,
  Span,
  Title,
  UserDeatils,
  UserImg,
  Username,
} from "./users.styles";
import {
  PageNotification,
  PaginateContainer,
  PagWrapper,
} from "../../pages/Users/agent.styles";

const UserTable = ({ allUsers, currentItems, handlePageClick, pageCount }) => {
  return (
    <Container>
      <Title>Users Table</Title>
      <P>
        Use <Span>pencil icon</Span> to view user profile
      </P>
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
            {currentItems &&
              currentItems.map((row) => (
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
                    <Link to={"/profile/" + encodeURIComponent(row.user_name)}>
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
        <PagWrapper>
          <PageNotification>
            Showing {allUsers.from} to {allUsers.to} of {allUsers.total} entries
          </PageNotification>
          <PaginateContainer
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={8}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageLinkClassName="pageNum"
            previousLinkClassName="pageNum"
            nextLinkClassName="pageNum"
          />
        </PagWrapper>
      </TableContainer>
    </Container>
  );
};

export default UserTable;
