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
import { getResellers } from "../../Redux/apiCalls";
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

const Resellers = () => {
  const { resellers, isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(resellers?.last_page);
  const [currentItems, setCurrentItems] = useState(resellers?.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = resellers?.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      resellers.data && resellers.data.slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(resellers?.total / itemsPerPage));
  }, [itemOffset, resellers, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % resellers?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getResellers(dispatch, currentPage);
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
            <H3>Resellers</H3>
            <DescP>
              User / <DescSpan>Resellers</DescSpan>
            </DescP>
          </Desc>
          <TableWrapper>
            <P>The list of approved resellers.</P>
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
                        Business Name
                      </TableCell>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        DOB
                      </TableCell>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        Phone Number
                      </TableCell>
                      <TableCell
                        style={{ color: "#8281cc", fontWeight: "bold" }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentItems &&
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
                              {row.company_name}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              {row.dob}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              {row.phoneno}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              <Link
                                to={
                                  "/profiler/" +
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
                        ))}
                  </TableBody>
                </Table>
                <PagWrapper>
                  <PageNotification>
                    Showing {resellers?.from} to {resellers?.to} of{" "}
                    {resellers?.total} entries
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

export default Resellers;
