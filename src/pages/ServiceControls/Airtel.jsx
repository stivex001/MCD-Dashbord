import {
  CircularProgress,
  Paper,
  Table,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Bar/Navbar";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import { getAirtelList } from "../../Redux/apiCalls";
import { Loading } from "../transaction/pending.styles";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { Container, Details, P, TableWrapper, Wrapper } from "./airtel.styles";

const Airtel = () => {
  const { airtelList, isFetching } = useSelector((state) => state.datalist);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [type, setType] = useState("DG");
  const [server, setServer] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getAirtelList(dispatch, type, server);
  }, [dispatch, type, server]);

  // useEffect(() => {
  //   const network = "AIRTEL";
  //   const types = ["CG", "SME", "DG"];
  //   const servers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  //   types.forEach((type) => {
  //     servers.forEach((server) => {
  //       getAirtelList(dispatch, network, type, server);
  //     });
  //   });
  // }, [dispatch]);

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
                {airtelList.data &&
                  airtelList.data.map((row) => (
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
                  ))}
              </Table>
            </TableContainer>
          </Details>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={airtelList?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableWrapper>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Airtel;
