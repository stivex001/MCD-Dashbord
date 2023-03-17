import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getWalletData } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Title,
  Wrapper,
} from "./wallet.styles";

const WalletList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { walletData, isFetching } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    getWalletData(dispatch);
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isFetching) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Wallet List</H3>
          <DescP>
            Wallet / <DescSpan>Wallet List</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <Title>Wallet Table</Title>
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
                      Amount
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Medium
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Reference
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      O.Wallet
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      N.Wallet
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Version
                    </TableCell>
                  </TableRow>
                </TableBody>
                {walletData &&
                  walletData
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
                            &#8358;{row.amount}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            <Span
                              style={{
                                backgroundColor: `${
                                  row.status === "completed"
                                    ? "#5dd099"
                                    : "#f8c955"
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
                            &#8358;{row.o_wallet}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            &#8358;{row.n_wallet}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.version}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
              </Table>
              <TablePagination
                rowsPerPageOptions={[10, 15, 100]}
                component="div"
                count={walletData && walletData.length}
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

export default WalletList;
