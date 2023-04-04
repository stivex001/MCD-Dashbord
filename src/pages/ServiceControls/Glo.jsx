import { Search } from "@mui/icons-material";
import {
  CircularProgress,
  MenuItem,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import useInput from "../../Hooks/use-form";
import { getGloList } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
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

const Glo = () => {
  const { gloList, isFetching } = useSelector((state) => state.datalist);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {
    value: enteredType,
    valueChangeHandler: typeInputChange,
    reset: resetTypeInput,
  } = useInput();

  const {
    value: enteredServer,
    valueChangeHandler: serverInputChange,
    reset: resetServerInput,
  } = useInput();

  const allInputValues = enteredType || enteredServer;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (allInputValues.trim() === "") {
      return getGloList(dispatch, enteredType, enteredServer);
    }
    getGloList(dispatch, enteredType, enteredServer);
    resetTypeInput();
    resetServerInput();
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
            >
              <MenuItem key="CG" value="CG">
                CG
              </MenuItem>
              <MenuItem key="CG" value="CG">
                SME
              </MenuItem>
              <MenuItem key="CG" value="CG">
                DG
              </MenuItem>
            </TextField>

            <TextField
              select
              label="Select Server"
              variant="outlined"
              onChange={serverInputChange}
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

        {gloList && (
          <TableWrapper>
            <P>Data Plans</P>
            <Details>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <Tablehead
                    id="id"
                    network="Network"
                    product="Product Name"
                    price="Provider Price"
                    yourPrice="Your Price"
                    server="Server"
                    status="Status"
                    date="Date Modified"
                    action="Action"
                  />
                  {gloList.data && gloList.data.length === 0 ? (
                    <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                      <TableCell
                        colSpan={10}
                        style={{ textAlign: "center", color: "#8887a9" }}
                      >
                        No data in the table
                      </TableCell>
                    </TableRow>
                  ) : (
                    gloList.data &&
                    gloList.data.map((row) => (
                      <Tablebody
                        key={row.id}
                        id={row.id}
                        network={row.network}
                        name={row.name}
                        price={row.price}
                        yourprice={row.amount}
                        server={row.server}
                        status={row.status}
                        date={row.updated_at}
                      />
                    ))
                  )}
                </Table>
              </TableContainer>
            </Details>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={gloList?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableWrapper>
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Glo;
