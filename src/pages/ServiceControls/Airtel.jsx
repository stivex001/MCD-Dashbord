import { Paper, Table, TableContainer } from "@mui/material";
import Navbar from "../../components/Bar/Navbar";
import { airtelData} from "../../components/DataPlansTable/dataPlans";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import { Container, Details, P, TableWrapper, Wrapper } from "./airtel.styles";



const Mtn = () => {
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
      </Wrapper>
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
                  id={row.id}
                  network={row.network}
                  name={row.name}
                  price={row.price}
                  yourprice={row.yourprice}
                  server={row.server}
                  action={row.action}
                  status={row.status}
                  date={row.date}
                />
              ))}
            </Table>
          </TableContainer>
        </Details>
      </TableWrapper>

      <Footer />
    </Container>
  );
};

export default Mtn;
