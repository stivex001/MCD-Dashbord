import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { walletsData } from "../../components/Wallet/wallet";
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
const Span = styled.span`
  color: #fff;
  padding: 2.6px 4.2px;
  font-size: 10.5px;
  border-radius: 5px;
`;
const Title = styled.span`
  font-size: 20px;
  color: #4a4b4c;
  margin-bottom: 15px;
  font-weight: bold;
`;

const WalletList = () => {
  return (
    <Container>
      <Topbar />
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
                  <TableCell style={{ color: "##827fc0" }}>id</TableCell>
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
