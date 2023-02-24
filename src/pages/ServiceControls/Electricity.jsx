import { Paper, Table, TableContainer } from "@mui/material";
import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import {electricityData} from "../../components/DataPlansTable/dataPlans";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const TableWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const P = styled.p`
  font-size: 13px;
  color: #8c9ea9;
`;
const Details = styled.div`
  margin: 30px 0;
`;

const Electricity = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Electricity Control</H3>
          <DescP>
            Services / <DescSpan>Electricity Control</DescSpan>
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
                network="Company"
                yourPrice="Discount"
                server="Server"
                status="Status"
                date="Date Modified"
                action="Action"
              />
              {electricityData.map((row) => (
                <Tablebody
                  id={row.id}
                  name={row.name}
                  network={row.network}
                  price={row.price}
                  yourprice={row.discount}
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

export default Electricity;
