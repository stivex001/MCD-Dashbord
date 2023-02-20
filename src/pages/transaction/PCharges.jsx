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
  const Span = styled.span`
    color: #fff;
    padding: 2.6px 4.2px;
    font-size: 10.5px;
    border-radius: 5px;
  `;
  
  const PCharges = () => {
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
                <TableBody>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8887a9" }}>id</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Username</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Amount</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Type</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Trans ID</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>O.Balance</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>N.Balance</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Version</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Date</TableCell>
                  </TableRow>
                </TableBody>
                {marketData.map((row) => (
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
  
        <Footer />
      </Container>
    );
  };
  
  export default PCharges;
  