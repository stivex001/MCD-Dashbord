import { Paper, Table, TableContainer, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../../components/Bar/Navbar";
import { airtelData} from "../../components/DataPlansTable/dataPlans";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import { userRequest } from "../../requestMethods";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { Container, Details, P, TableWrapper, Wrapper } from "./airtel.styles";



const Airtel = () => {

  const [artelData, setAirtelData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
      const getPendingTransactions = async () => {
        try {
          const res = await userRequest.get("/appDataConfigList/AIRTEL/CG/10");
          setAirtelData(res.data.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      getPendingTransactions();
    }, [artelData]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

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
              {airtelData.map((row) => (
                <Tablebody
                key={row.id}
                  id={row.id}
                  network={row.network}
                  name={row.name}
                  price={row.price}
                  yourprice={row.yourprice}
                  server={row.server}
                  action={row.action}
                  status={row.status}
                  date={row.created_at}
                />
              ))}
            </Table>
          </TableContainer>
        </Details>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={artelData.length}
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
