import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Span, TableWrapper } from "../transaction/general.styles";
import { Loading } from "../transaction/pending.styles";
import { PaginateContainer } from "../Users/agent.styles";
import { getSamTrans } from "../../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
const Container = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;

const SamjiTransaction = () => {
  const { isFetching, samTrans } = useSelector((state) => state.authProfile);

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(samTrans?.last_page);
  const [currentItems, setCurrentItems] = useState(samTrans?.data);
  const [currentTransPage, setCurrentTransPage] = useState(1);

  const dispatch = useDispatch();

  const itemsPerPage = samTrans?.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      samTrans.data && samTrans.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(samTrans?.total / itemsPerPage));
  }, [itemOffset, samTrans, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % samTrans?.data.length;
    setItemOffset(newOffset);
    setCurrentTransPage(event.selected + 1);
  };

  useEffect(() => {
    getSamTrans(dispatch, currentTransPage);
  }, [dispatch, currentTransPage]);

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <Container>
      <Title>Transactions</Title>
      <TableWrapper>
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
              </TableRow>
            </TableBody>
            {currentItems && currentItems.length === 0 ? (
              <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                <TableCell
                  colSpan={12}
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
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.ref}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.date}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.note}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))
            )}
          </Table>

          <PaginateContainer
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageLinkClassName="pageNum"
            previousLinkClassName="pageNum"
            nextLinkClassName="pageNum"
            forcePage={currentTransPage - 1}
          />
        </TableContainer>
      </TableWrapper>
    </Container>
  );
};

export default SamjiTransaction;
