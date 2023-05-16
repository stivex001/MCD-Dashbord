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
import { getTvList } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { PaginateContainer } from "../Users/agent.styles";
import { P } from "./airtel.styles";
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Wrapper,
} from "../transaction/general.styles";
import { Loading } from "../transaction/pending.styles";
import { BtnConatiner } from "../ResellerControl/airtimeControl.styles";

const Tv = () => {
  const { tvList, isFetching } = useSelector((state) => state.datalist);
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(tvList?.last_page);
  const [currentItems, setCurrentItems] = useState(tvList?.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = tvList?.per_page;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tvList?.data && tvList?.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tvList?.total / itemsPerPage));
  }, [itemOffset, tvList, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tvList?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getTvList(dispatch, currentPage);
  }, [dispatch, currentPage]);

  if (isFetching) {
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
            <H3>TV Plans</H3>
            <DescP>
              TV Plans / <DescSpan>TV Plans</DescSpan>
            </DescP>
          </Desc>
          <TableWrapper>
            <P>TV Plans</P>
            <Details>
              <TableContainer
                component={Paper}
                sx={{ border: "1px solid #e0e0e0" }}
              >
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
                        Type
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Discount
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Server
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Date Modified
                      </TableCell>
                      <TableCell
                        style={{ color: "#827fc0", fontWeight: "bold" }}
                      >
                        Action
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
                            {row.type}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.name}
                          </TableCell>

                          <TableCell style={{ color: "#8887a9" }}>
                            &#8358;{row.price}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.discount}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            {row.server}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            <Span
                              style={{
                                backgroundColor: `${
                                  row.status === 1 ? "#5dd099" : "#f8c955"
                                }`,
                              }}
                            >
                              {row.status === 1 ? "Active" : "Inactive"}
                            </Span>
                          </TableCell>

                          <TableCell style={{ color: "#8887a9" }}>
                            {row.updated_at}
                          </TableCell>
                          <TableCell style={{ color: "#8887a9" }}>
                            <BtnConatiner to={`/tvcontrol/${row.id}`}>
                              Modify
                            </BtnConatiner>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ))}
                </Table>
                <PaginateContainer
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
                  forcePage={currentPage - 1}
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

export default Tv;
