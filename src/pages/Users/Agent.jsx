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
import { getAgents } from "../../Redux/apiCalls";
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

const Agent = () => {
  const { agents, isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(agents?.last_page);
  const [currentItems, setCurrentItems] = useState(agents?.data);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = agents?.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(agents.data && agents.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(agents?.total / itemsPerPage));
  }, [itemOffset, agents, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % agents?.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getAgents(dispatch, currentPage);
  }, [dispatch, currentPage]);

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
          <H3>Agents</H3>
          <DescP>
            User / <DescSpan>Agents</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <P>The list of approved agents.</P>
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
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      User Name
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Business Name
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      DOB
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
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
                                "/profile-/" + encodeURIComponent(row.user_name)
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
                  Showing {agents?.from} to {agents?.to} of {agents?.total} entries
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
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Agent;
