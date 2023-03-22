import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { marketData } from "../../components/Transactiontables/transactions";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Wrapper,
} from "./general.styles";

const GeneralMarket = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>General Market History</H3>
          <DescP>
            Transaction / <DescSpan>General Market History</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      id
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Username
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Amount
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Type
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Trans ID
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      O.Balance
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      N.Balance
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Version
                    </TableCell>
                    <TableCell style={{ color: "#827fc0", fontWeight: "bold" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableBody>
                {marketData.map((row) => (
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
                        {row.username}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.amount}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        <Span
                          style={{
                            backgroundColor: `${
                              row.type === "Credit" ? "#5dd099" : "#f8c955"
                            }`,
                          }}
                        >
                          {row.type}
                        </Span>
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.transId}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.oBalance}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.nBalance}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.version}
                      </TableCell>

                      <TableCell style={{ color: "#8887a9" }}>
                        {row.date}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </Details>
        </TableWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default GeneralMarket;
