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
  const { generalMarket, isProcessing } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(generalMarket);
  

  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(generalMarket.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(generalMarket.length / itemsPerPage));
  }, [itemOffset, generalMarket, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % generalMarket.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getGmData(dispatch);
  }, [dispatch]);

  if (isProcessing) {
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
                      Type
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Trans ID
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      O.Balance
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      N.Balance
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Version
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableBody>
                {currentItems && currentItems.map((row) => (
                  <TableBody>
                    <TableRow
                      key={row.id}
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
                marginPagesDisplayed={2}
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
              />
            </TableContainer>
          </Details>
        </TableWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default GeneralMarket;
