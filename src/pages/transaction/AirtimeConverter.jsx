import { CreditCard } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { airtimeData } from "../../components/Transactiontables/transactions";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const FormWrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px 30px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
`;
const Input = styled.input`
  padding: 12px;
  width: 100%;
  outline-color: #605daf;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;

  background-color: #4e74ab;
  padding: 10px;
  margin: 20px 0;
  gap: 2px;
  color: white;
  cursor: pointer;
  border-radius: 1px;
  &:hover {
    color: #343a40;
  }
`;
const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-weigth: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #343a40;
  }
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

const AirtimeConverter = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Airtime Converter</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Airtime Converter</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
      <Form>
        <InputContainer>
          <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
            #
          </p>
          <Input type="text" placeholder="Enter Reference Number" />
        </InputContainer>
        <Btn>
          <CreditCard />
          <Button>Credit</Button>
        </Btn>
      </Form>
    </FormWrapper>
      </Wrapper>

      <TableWrapper>
        <Details>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                  <TableCell style={{ color: "#8887a9" }}>#</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Reference</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Amount</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Network</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Phone Number</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Status</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Username</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Receiver</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>Date</TableCell>
                  <TableCell style={{ color: "#8887a9" }}>App Version</TableCell>
                </TableRow>
              </TableBody>
              {airtimeData.map((row) => (
                <TableBody>
                  <TableRow key={row.id} style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8887a9" }}>{row.id}</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.ref}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.amount}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.network}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.phone}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      <Span
                        style={{
                          backgroundColor: `${
                            row.staus === "Credit" ? "#5dd099" : "#f8c955"
                          }`,
                        }}
                      >
                        {row.staus}
                      </Span>
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.username}
                    </TableCell>

                    <TableCell style={{ color: "#8887a9" }}>
                      {row.receiver}
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      {row.date}
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

export default AirtimeConverter;
