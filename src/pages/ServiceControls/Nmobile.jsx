import { Search } from "@mui/icons-material";
import {
  CircularProgress,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import useInput from "../../Hooks/use-form";
import { getMobileList } from "../../Redux/apiCalls";
import { Span } from "../transaction/general.styles";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { BtnConatiner } from "../Users/agent.styles";
import {
  Btn,
  Container,
  Details,
  Form,
  FormWrapper,
  P,
  TableWrapper,
  Wrapper,
} from "./airtel.styles";
import Server from "./server";

const Nmobile = () => {
  const { mobileList, isFetching } = useSelector((state) => state.datalist);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { value: enteredType, valueChangeHandler: typeInputChange } =
    useInput();

  const { value: enteredServer, valueChangeHandler: serverInputChange } =
    useInput();

  const allInputValues = enteredType || enteredServer;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (allInputValues.trim() === "") {
      return getMobileList(dispatch, enteredType, enteredServer);
    }
    getMobileList(dispatch, enteredType, enteredServer);
  };

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
          <H3>Data Plans</H3>
          <DescP>
            Services / <DescSpan>Data Plans</DescSpan>
          </DescP>
        </Desc>

        <FormWrapper onSubmit={handleFormSubmission}>
          <Form>
            <TextField
              select
              label="Select Type"
              variant="outlined"
              onChange={typeInputChange}
              value={enteredType}
            >
              <MenuItem key="CG" value="CG">
                CG
              </MenuItem>
              <MenuItem key="SME" value="SME">
                SME
              </MenuItem>
              <MenuItem key="DG" value="DG">
                DG
              </MenuItem>
            </TextField>

            <TextField
              select
              label="Select Server"
              variant="outlined"
              onChange={serverInputChange}
              value={enteredServer}
            >
              {Server.map((server) => (
                <MenuItem key={server.id} value={server.value}>
                  {server.value}
                </MenuItem>
              ))}
            </TextField>
          </Form>
          <Btn type="submit">
            <Search />
            {isFetching ? "Searching...." : "Search"}
          </Btn>
        </FormWrapper>

        {mobileList && (
          <Details>
            <TableWrapper>
              <P>Data Plans</P>
              <Details>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Id
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Network
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Product Name
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Provider Price
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Your Price
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Server
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Status{" "}
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Date Modified
                        </TableCell>
                        <TableCell
                          style={{ color: "#8281cc", fontWeight: "700" }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {mobileList.data && mobileList.data.length === 0 ? (
                      <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                        <TableCell
                          colSpan={10}
                          style={{ textAlign: "center", color: "#8887a9" }}
                        >
                          No data in the table
                        </TableCell>
                      </TableRow>
                    ) : (
                      mobileList.data &&
                      mobileList.data.map((row) => (
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
                              {row.network}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              {row.name}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              &#8358;{row.price}
                            </TableCell>
                            <TableCell style={{ color: "#8887a9" }}>
                              &#8358;{row.amount}
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
                              <BtnConatiner
                                to={`/9mobiledataControl/${row.id}`}
                              >
                                Modify
                              </BtnConatiner>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      ))
                    )}
                  </Table>
                </TableContainer>
              </Details>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={mobileList.data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableWrapper>
          </Details>
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Nmobile;
