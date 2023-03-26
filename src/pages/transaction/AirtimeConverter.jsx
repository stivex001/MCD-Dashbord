import { Close, CreditCard } from "@mui/icons-material";
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
import useInput from "../../Hooks/use-form";
import { creditAirtime, getAirtimeList } from "../../Redux/apiCalls";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  PageNotification,
  PaginateContainer,
  PagWrapper,
} from "../Users/agent.styles";
import {
  Btn,
  Container,
  Details,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Span,
  TableWrapper,
  Wrapper,
} from "./airtimeConverter.styles";
import { H2, Loading, MsgContainer } from "./pending.styles";

const AirtimeConverter = () => {
  const { airtimeCovList, isFetching, message, error } = useSelector(
    (state) => state.airtimeConverter
  );
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(airtimeCovList.last_page);
  const [currentItems, setCurrentItems] = useState(airtimeCovList.data);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    value: enteredRef,
    valueChangeHandler: refInputChange,
    reset: resetRefInput,
  } = useInput();

  const itemsPerPage = airtimeCovList.per_page;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(airtimeCovList.data && airtimeCovList.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(airtimeCovList.total / itemsPerPage));
  }, [itemOffset, airtimeCovList, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % airtimeCovList.data.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getAirtimeList(dispatch, currentPage);
  }, [dispatch, currentPage]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    creditAirtime(dispatch, {ref: enteredRef});
    resetRefInput();
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
          <H3>Airtime Converter</H3>
          <DescP>
            Transaction /{" "}
            <DescSpan>Verification &gt; Airtime Converter</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
        {error && (
              <MsgContainer>
                <H2>Invalid Reference Number!</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
            {message && (
              <MsgContainer type="success">
                <H2 type="success">Transaction successfull!</H2>
                <Close style={{ color: "#806e6b", cursor: "pointer" }} />
              </MsgContainer>
            )}
          <Form onSubmit={handleFormSubmission}>
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
                #
              </p>
              <Input
                type="text"
                placeholder="Enter Reference Number"
                required
                onChange={refInputChange}
                value={enteredRef}
              />
            </InputContainer>
            <Btn type="submit">
              <CreditCard />
              Credit Wallet
            </Btn>
          </Form>
        </FormWrapper>
        <TableWrapper>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableBody>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      #
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Reference
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Amount
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Network
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Username
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Receiver
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Date
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      App Version
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
                          {row.ref}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.amount}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.network}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.phoneno}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          <Span
                            style={{
                              backgroundColor: `${
                                row.status === "Credit" ? "#5dd099" : "#f8c955"
                              }`,
                            }}
                          >
                            {row.status}
                          </Span>
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.user_name}
                        </TableCell>

                        <TableCell style={{ color: "#8887a9" }}>
                          {row.receiver}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.created_at}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.version}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
              </Table>
              <PagWrapper>
                <PageNotification>
                  Showing {airtimeCovList.from} to {airtimeCovList.to} of{" "}
                  {airtimeCovList.total} entries
                </PageNotification>
                <PaginateContainer
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={8}
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
      <Footer />
    </Container>
  );
};

export default AirtimeConverter;
