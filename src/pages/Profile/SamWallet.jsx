import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import {
  PageNotification,
  PaginateContainer,
  PagWrapper,
} from "../Users/agent.styles";
import { Span } from "../transaction/general.styles";
import { Loading } from "../transaction/pending.styles";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSamWallet } from "../../Redux/apiCalls";

const Containers = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;

const SamWallet = () => {
  const { samWallet, isFetching } = useSelector((state) => state.authProfile);

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(samWallet?.last_page);
  const [currentItems, setCurrentItems] = useState(samWallet?.data);
  const [currentWalletPage, setCurrentWalletPage] = useState(1);

  const dispatch = useDispatch();

  const itemsPerPage = samWallet?.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      samWallet?.data && samWallet?.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(samWallet?.total / itemsPerPage));
  }, [itemOffset, samWallet, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % samWallet?.data.length;
    setItemOffset(newOffset);
    setCurrentWalletPage(event.selected + 1);
  };

  useEffect(() => {
    getSamWallet(dispatch, currentWalletPage);
  }, [dispatch, currentWalletPage]);

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <Containers>
      <Title>Wallet Table</Title>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                  id
                </TableCell>
                <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                  Username
                </TableCell>
                <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
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
                  N.Wallet{" "}
                </TableCell>
                <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                  Version
                </TableCell>
              </TableRow>
            </TableBody>
            {currentItems && currentItems.length === 0 ? (
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell
                  colSpan={8}
                  style={{ textAlign: "center", color: "#8887a9" }}
                >
                  No data in the table
                </TableCell>
              </TableRow>
            ) : (
              currentItems &&
              currentItems.map((row) => (
                <TableBody key={row.id}>
                  <TableRow
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
                      {row.medium}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.ref}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.o_wallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.n_wallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.version}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))
            )}
          </Table>
          <PagWrapper>
            <PageNotification>
              Showing {samWallet?.from || "0"} to {samWallet?.to || "0"} of{" "}
              {samWallet?.total} entries
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
              forcePage={currentWalletPage - 1}
            />
          </PagWrapper>
        </TableContainer>
      </div>
    </Containers>
  );
};

export default SamWallet;
