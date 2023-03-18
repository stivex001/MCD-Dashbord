import { ArrowDropDown, NoteAlt } from "@mui/icons-material";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
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
  SearchAgent,
  SearchDesc,
  TableWrapper,
  Wrapper,
} from "./agent.styles";

const Resellers = () => {
  const { agents, isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    getAgents(dispatch);
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
              <Input type="text" />
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
                  {agents &&
                    agents
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
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
                                "/profile/" + encodeURIComponent(row.user_name)
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
              <TablePagination
                rowsPerPageOptions={[10, 15, 100]}
                component="div"
                count={agents && agents.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Details>
        </TableWrapper>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Resellers;
