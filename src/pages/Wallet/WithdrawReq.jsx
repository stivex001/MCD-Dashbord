import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getWithdrawalData } from "../../Redux/apiCalls";
import { laptop } from "../../responsive";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const TableWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const Details = styled.div`
  margin: 30px 0;
`;
const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
const Title = styled.span`
  font-size: 20px;
  color: #4a4b4c;
  margin-bottom: 15px;
  font-weight: bold;
`;
const BtnConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button`
  background-color: ${(prop) =>
    prop.bg === "approve" ? "#605daf" : "#f96e5b"};
  padding: 12px;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${(prop) =>
      prop.bg === "approve" ? "rgba(96,93,175,0.7)" : "rgba(249,110,91,0.7)"};
  }
`;

const WithdrawReq = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { withdrawalData, isFetching } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    getWithdrawalData(dispatch);
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
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Withdrawal List</H3>
          <DescP>
            Wallet / <DescSpan>Withdrawal List</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <Title>Withdrawal Requests</Title>
          <Details>
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
                      Account Number
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Amount
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Wallet
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Reference
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Bank Name
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Version
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Date
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableBody>
                {withdrawalData &&
                  withdrawalData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableBody>
                        <TableRow
                          key={row.id}
                          style={{ backgroundColor: "#f3f2f7" }}
                        >
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.id}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.user_name}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.account_number}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            &#8358;{row.amount}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            <Span
                              style={{
                                backgroundColor: `${
                                  row.status === 1
                                    ? "#5dd099"
                                    : row.status === 0
                                    ? "#f96e5b"
                                    : "#33cdff"
                                }`,
                              }}
                            >
                              {row.status === 0
                                ? "pending"
                                : row.status === 1
                                ? "completed"
                                : "rejected"}
                            </Span>
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.wallet}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.ref}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.bank}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.version}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.created_at}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.status === 0 && (
                              <BtnConatiner>
                                <Button bg="approve">Approve</Button>
                                <Button>Reject</Button>
                              </BtnConatiner>
                            )}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
              </Table>
              <TablePagination
                rowsPerPageOptions={[10, 15, 100]}
                component="div"
                count={withdrawalData && withdrawalData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Details>
        </TableWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default WithdrawReq;
