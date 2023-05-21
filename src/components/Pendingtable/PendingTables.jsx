import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { emptyCheckbox } from "../../Redux/pendingTransSlice";
import {
  PageNotification,
  PaginateContainer,
  PagWrapper,
} from "../../pages/Users/agent.styles";
import { reProcessOne, reversalTrans } from "../../Redux/apiCalls";

const Container = styled.div``;
const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
const BtnConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Button = styled.button`
  font-size: 14px;
  border: none;
  // background: none;
  color: #fff;
  background-color: ${(prop) =>
    prop.type === "Re-process Selected"
      ? "#605daf"
      : prop.type === "Re-process"
      ? "#605daf"
      : prop.type === "Mark Delivered Selected"
      ? "#5dd099"
      : prop.type === "Mark Delivered"
      ? "#5dd099"
      : "#f96e5b"};
  padding: 12px;
  cursor: pointer;
  border-radius: 5px;
`;
const Input = styled.input`
  margin-right: 20px;
`;

const PendingTables = ({
  pendingTrans,
  pageCount,
  currentItems,
  showerr,
  handlePageClick,
  handleChange,
  currentPage
}) => {
  const dispatch = useDispatch();

  const handleReProcess = (id) => {
    if (!id) {
      return dispatch(emptyCheckbox(showerr));
    } else {
      reProcessOne(dispatch, id);
    }
  };

  const handleReversal = (id) => {
    if (!id) {
      return dispatch(emptyCheckbox(showerr));
    } else {
      reversalTrans(dispatch, id);
    }
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#f3f2f7" }}>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                id
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Ref
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
                Date
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                I.P{" "}
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Server
              </TableCell>
              <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                Server Response
              </TableCell>
              <TableCell style={{ color: "#8281cc" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems && currentItems.length === 0 ? (
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell
                  colSpan={10}
                  style={{ textAlign: "center", color: "#8887a9" }}
                >
                  There is no Pending Transaction Available
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
                  <TableCell style={{ color: "#8887a9" }}>
                    <Input
                      type="checkbox"
                      value={row.id}
                      onChange={handleChange}
                    />
                    {row.id}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.ref}</TableCell>
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
                          row.status === "successful" ? "#33cdff" : "#f96e5b"
                        }`,
                      }}
                    >
                      {row.status}
                    </Span>
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>{row.date}</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.ip_address}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.server}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    {row.server_response}
                  </TableCell>
                  <TableCell style={{ color: "#8887a9" }}>
                    <BtnConatiner>
                      <Button
                        type="Re-process Selected"
                        id={row.id}
                        onClick={() => handleReProcess(row.id)}
                      >
                        Re-process
                      </Button>
                      <Button type="Mark Delivered">
                        Mark Delivered Selected
                      </Button>
                      <Button
                        type="Reverse Transaction"
                        onClick={() => handleReversal(row.id)}
                      >
                        Reverse Transaction Selected
                      </Button>
                    </BtnConatiner>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <PagWrapper>
          <PageNotification>
            Showing {pendingTrans?.from || "0"} to {pendingTrans?.to || "0"} of{" "}
            {pendingTrans?.total || "0"} entries
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

export default PendingTables;
