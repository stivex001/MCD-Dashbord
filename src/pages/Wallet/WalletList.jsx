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
import { walletsData } from "../../components/Wallet/wallet";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Title,
  Wrapper,
} from "./wallet.styles";

const WalletList = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Wallet List</H3>
          <DescP>
            Wallet / <DescSpan>Wallet List</DescSpan>
          </DescP>
        </Desc>
      </Wrapper>
      <TableWrapper>
        <Title>Wallet Table</Title>
        <Details>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                  <TableCell style={{ color: "#827fc0" }}>id</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>Username</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>Amount</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>Status</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>Medium</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>Reference</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>O.Wallet</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>N.Wallet</TableCell>
                  <TableCell style={{ color: "#827fc0" }}>Version</TableCell>
                </TableRow>
              </TableBody>
              {walletsData.map((row) => (
                <TableBody>
                  <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
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
                            row.status === "completed" ? "#5dd099" : "#f8c955"
                          }`,
                        }}
                      >
                        {row.status}
                      </Span>
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.medium}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.ref}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.oWallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.nWallet}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.version}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Details>
      </TableWrapper>

      <Footer />
    </Container>
  );
};

export default WalletList;
