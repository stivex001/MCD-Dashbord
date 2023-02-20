import { Paper, Table, TableContainer } from "@mui/material";
import styled from "styled-components";
import Tablebody from "../../components/DataPlansTable/Tablebody";
import Tablehead from "../../components/DataPlansTable/Tablehead";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { marketData } from "../../components/Transactiontables/transactions";
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
const Details = styled.div`
  margin: 30px 0;
`;

const GeneralMarket = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>General Market History</H3>
          <DescP>
            Transaction / <DescSpan>General Market History</DescSpan>
          </DescP>
        </Desc>
      </Wrapper>
      <TableWrapper>
        <Details>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <Tablehead
                id="id"
                network="Username"
                price="Amount"
                type="Type"
                transId="Trans ID"
                discount="O.Balance"
                balance="N.Balance"
                version="Version"
                status="Status"
                date="Date"
                
              />
              {marketData.map((row) => (
                <Tablebody
                  id={row.id}
                  network={row.username}
                  price={row.amount}
                  type={row.type}
                  transId={row.transId}
                  discount={row.oBalance}
                  balance={row.nBalance}
                  version={row.version}
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

export default GeneralMarket;
