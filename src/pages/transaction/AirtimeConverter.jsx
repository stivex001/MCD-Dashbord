import { CreditCard } from "@mui/icons-material";
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
import { airtimeData } from "../../components/Transactiontables/transactions";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";
import {
  Btn,
  Container,
  Details,
  Form,
  FormWrapper,
  Input,
  InputContainer,
  Span,
  TableWrapper,
  Wrapper,
} from "./airtimeConverter.styles";

const AirtimeConverter = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Airtime Converter</H3>
          <DescP>
            Transaction /{" "}
            <DescSpan>Verification &gt; Airtime Converter</DescSpan>
          </DescP>
        </Desc>
        <FormWrapper>
          <Form>
            <InputContainer>
              <p style={{ padding: "5px", fontSize: "20px", color: "#495057" }}>
                #
              </p>
              <Input
                type="text"
                placeholder="Enter transaction id or reference"
                required
                // onChange={IdInputChange}
                // value={enteredId}
              />
            </InputContainer>
            <Btn type="submit">
              <CreditCard />
              Credit
            </Btn>
          </Form>
        </FormWrapper>
        <TableWrapper>
          <Details>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableBody>
                  <TableRow style={{ backgroundColor: "#f3f2f7" }}>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>#</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Reference
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>Amount</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>Network</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>Status</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>Username</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>Receiver</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>Date</TableCell>
                    <TableCell style={{ color: "#8281cc", fontWeight: "bold" }}>
                      App Version
                    </TableCell>
                  </TableRow>
                </TableBody>
                {airtimeData.map((row) => (
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
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AirtimeConverter;
