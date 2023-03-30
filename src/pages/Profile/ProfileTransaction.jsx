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
import {
  Container,
  Details,
  Span,
  TableWrapper,
  Wrapper,
} from "../transaction/general.styles";

const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;

const ProfileTransaction = ({ userPerformance }) => {
  const userTransaction = userPerformance.data;

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <TableWrapper>
          <Title>Transactions</Title>
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
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Description
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      I.Wallet
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      F.Wallet{" "}
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      I.p
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Server
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Ref
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Date
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Note
                    </TableCell>
                  </TableRow>
                </TableBody>
                {userTransaction &&
                  userTransaction.map((row) => (
                    <TableBody key={row.id}>
                      <TableRow
                        key={row.id}
                        style={{ backgroundColor: "#f3f2f7" }}
                      >
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.id}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.user_name}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                        &#8358;{row.amount}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.description}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          <Span
                            style={{
                              backgroundColor: `${
                                row.status === "successful"
                                  ? "#33cdff"
                                  : row.status === "pending"
                                  ? "#f96e5b"
                                  : "#5dd099"
                              }`,
                            }}
                          >
                            {row.status}
                          </Span>
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.i_wallet}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.f_wallet}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.ip_address}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.server}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.ref}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.date}
                        </TableCell>
                        <TableCell style={{ color: "#8887a9" }}>
                          {row.note}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
              </Table>
            </TableContainer>
          </Details>
        </TableWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProfileTransaction;
