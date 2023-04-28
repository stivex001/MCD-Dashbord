import { ArrowDropDown, NoteAlt } from "@mui/icons-material";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { getGmBlockData } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import Logo from "../../assets/mcd_logo.png";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Action,
  ActionList,
  ActionListCol,
  AgentDesc,
  Column,
  Container,
  Details,
  DivWrapper,
  Img,
  Input,
  P,
  PageNotification,
  PaginateContainer,
  PagWrapper,
  SearchAgent,
  SearchDesc,
  TableWrapper,
  Wrapper,
} from "./agent.styles";

const GmBlock = () => {
  const { gmBlock, isFetching } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(gmBlock.last_page);
  const [currentItems, setCurrentItems] = useState(gmBlock.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = gmBlock.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(gmBlock.data && gmBlock.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(gmBlock.total / itemsPerPage));
  }, [itemOffset, gmBlock, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gmBlock.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getGmBlockData(dispatch, currentPage);
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
            <H3>General Market</H3>
            <DescP>
              User / <DescSpan>General Market</DescSpan>
            </DescP>
          </Desc>
          <TableWrapper>
            <P>The list of suspended users on General Market.</P>
            <DivWrapper>
              <Action>
                <ActionList>Copy</ActionList>
                <ActionList>Excel</ActionList>
                <ActionList>PDF</ActionList>
                <Column>
                  <ActionListCol>Column Visibility</ActionListCol>
                  <ArrowDropDown />
                </Column>
              </Action>
              <SearchAgent>
                <SearchDesc>Search: </SearchDesc>
                <Input type="text" onChange={(e) => setQuery(e.target.value)} />
              </SearchAgent>
            </DivWrapper>
            <Details>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        User Name
                      </TableCell>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        Reason
                      </TableCell>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        Date
                      </TableCell>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentItems && currentItems.length === 0 ? (
                      <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                        <TableCell
                          colSpan={4}
                          style={{ textAlign: "center", color: "#8887a9" }}
                        >
                          No data in the table
                        </TableCell>
                      </TableRow>
                    ) : (
                      currentItems &&
                      currentItems
                        .filter((row) =>
                          row.user_name.toLowerCase().includes(query)
                        )

                        .map((row) => (
                          <TableRow
                            key={row.id}
                            style={{ backgroundColor: "#f3f2f7" }}
                          >
                            <TableCell style={{ color: "#8887a9" }}>
                              <AgentDesc>
                                <Img src={row.phone || Logo} alt="" />
                                {row.user_name}
                              </AgentDesc>
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              {row.reason}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              {row.date}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              <Link
                                to={
                                  "/profile/" +
                                  encodeURIComponent(row.user_name)
                                }
                              >
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
                        ))
                    )}
                  </TableBody>
                </Table>
                <PagWrapper>
                  <PageNotification>
                    Showing {gmBlock.from || 0} to {gmBlock.to || 0} of{" "}
                    {gmBlock.total} entries
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
                  />
                </PagWrapper>
              </TableContainer>
            </Details>
          </TableWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default GmBlock;
