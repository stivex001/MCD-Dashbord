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
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getGmData } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { PaginateContainer } from "../Users/agent.styles";
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Wrapper,
} from "./general.styles";
import { Loading } from "./pending.styles";

const GeneralMarket = () => {
  const { generalMarket, isProcessing } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(generalMarket?.last_page);
  const [currentItems, setCurrentItems] = useState(generalMarket?.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = generalMarket?.per_page;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      generalMarket?.data && generalMarket?.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(generalMarket?.total / itemsPerPage));
  }, [itemOffset, generalMarket, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % generalMarket?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getGmData(dispatch, currentPage);
  }, [dispatch, currentPage]);

  if (isProcessing) {
    return (
      <Loading>
        <CircularProgress style={{ color: "blue" }} />
      </Loading>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Desc>
            <H3>General Market History</H3>
            <DescP>
              Transaction / <DescSpan>General Market History</DescSpan>
            </DescP>
          </Desc>
          <TableWrapper>
            <Details>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        id
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Username
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Amount
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Type
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Trans ID
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        O.Balance
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        N.Balance
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Version
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Date
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  {currentItems &&
                    currentItems.map((row) => (
                      <TableBody key={row.id}>
                        <TableRow
                          style={{
                            backgroundColor:
                              row.id % 2 === 0 ? "#ffffff" : "#f3f2f7",
                          }}
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
                                  row.type === "credit" ? "#5dd099" : "#f8c955"
                                }`,
                              }}
                            >
                              {row.type}
                            </Span>
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.transid}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            &#8358;{row.f_wallet}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            &#8358;{row.i_wallet}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.version}
                          </TableCell>

                          <TableCell style={{ color: "#8887a9" }}>
                            {row.date}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
                <PaginateContainer
                  // marginPagesDisplayed={2}
                  page={currentPage}
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
              </TableContainer>
            </Details>
          </TableWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default GeneralMarket;
