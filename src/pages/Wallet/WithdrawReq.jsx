import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { withdrawalData } from "../../components/Wallet/wallet";
import { laptop } from "../../responsive";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
  margin: 70px 0;
  ${laptop({ marginLeft: "250px" })};
`;
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
const BtnConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button`
  background-color: ${(prop) =>
    prop.bg === "approve" ? "#605daf" : "#f96e5b"};
  padding: 12px;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${(prop) =>
      prop.bg === "approve" ? "rgba(96,93,175,0.7)" : "rgba(249,110,91,0.7)"};
  }
`;

const WithdrawReq = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Withdrawal List</H3>
          <DescP>
            Wallet / <DescSpan>Withdrawal List</DescSpan>
          </DescP>
        </Desc>
        <TableWrapper>
          <Title>Withdrawal Requests</Title>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#827fc0" }}>id</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Username</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>
                      Account Number
                    </TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Amount</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Status</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Wallet</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>
                      Reference
                    </TableCell>
                    <TableCell style={{ color: "#827fc0" }}>
                      Bank Name
                    </TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Version</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Date</TableCell>
                    <TableCell style={{ color: "#827fc0" }}>Action</TableCell>
                  </TableRow>
                </TableBody>
                {withdrawalData.map((row) => (
                  <TableBody>
                    <TableRow
                      key={row.id}
                      style={{ backgroundColor: "#f3f2f7" }}
                    >
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.id}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.username}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.account}
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
                        {row.wallet}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.ref}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.bank}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.version}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.date}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.status === "pending" && (
                          <BtnConatiner>
                            <Button bg="approve">Approve</Button>
                            <Button>Reject</Button>
                          </BtnConatiner>
                        )}
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

export default WithdrawReq;
