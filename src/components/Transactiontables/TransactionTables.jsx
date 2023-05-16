import styled from "styled-components";
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
  PageNotification,
  PaginateContainer,
  PagWrapper,
} from "../../pages/Users/agent.styles";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;

const TransactionTables = ({
  transHistory,
  currentItems,
  currentPage,
  handlePageClick,
  pageCount,
}) => {
  return (
    <Container>
      <Title>Transactions Table</Title>
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
                Description
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                I.Wallet
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                F.Wallet{" "}
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                I.p
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Server
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Ref
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Note
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems && currentItems.length === 0 ? (
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell
                  colSpan={12}
                  style={{ textAlign: "center", color: "#8887a9" }}
                >
                  There is no Transaction History Available
                </TableCell>
              </TableRow>
            ) : (
              currentItems &&
              currentItems.map((row) => (
                <TableRow
                  key={row.id}
                  style={{
                    backgroundColor: row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                  }}
                >
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
                  <TableCell style={{ color: "#8887a9" }}>{row.ref}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.date}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.note}</TableCell>
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
              ))
            )}
          </TableBody>
        </Table>

        <PagWrapper>
          <PageNotification>
            Showing {transHistory?.from || "0"} to {transHistory?.to || "0"} of{" "}
            {transHistory?.to || "0"} entries
          </PageNotification>
          <PaginateContainer
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageLinkClassName="pageNum"
            previousLinkClassName="pageNum"
            nextLinkClassName="pageNum"
            forcePage={currentPage - 1}
          />
        </PagWrapper>
      </TableContainer>
    </Container>
  );
};

export default TransactionTables;
