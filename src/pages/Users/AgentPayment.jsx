import { PermIdentity } from "@mui/icons-material";
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
import { agentData } from "../../components/User/agent";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
  margin: 70px 0;
`;
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
  padding: 13px;
  margin: 20px 0;
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
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #343a40;
  }
`;
const TableWrapper = styled.div`
  padding: 20px;
`;
const Details = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
`;
const Span = styled.span`
  background-color: #4fcf9e;
  color: #fff;
  padding: 10px;
  font-size: 14px;
  border-radius: 2px;
`;

const AgentPayment = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Desc>
            <H3>Agent Payment</H3>
            <DescP>
              Agent / <DescSpan>Agent Payment</DescSpan>
            </DescP>
          </Desc>
          <FormWrapper>
            <Form>
              <InputContainer>
                <PermIdentity
                  style={{ padding: "5px", fontSize: "40px", color: "#495057" }}
                />
                <Input type="text" placeholder="Enter Agent Username" />
              </InputContainer>
              <Btn>
                <Button>Continue</Button>
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
                    <TableCell style={{ color: "#8887a9" }}>Username</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Wallet</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>
                      Registration Date
                    </TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Note</TableCell>
                    <TableCell style={{ color: "#8887a9" }}>Action</TableCell>
                  </TableRow>
                </TableBody>
                {agentData.map((row) => (
                  <TableBody>
                    <TableRow
                      key={row.id}
                      style={{ backgroundColor: "#f3f2f7" }}
                    >
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.username}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.wallet}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.date}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        {row.note}
                      </TableCell>
                      <TableCell style={{ color: "#8887a9" }}>
                        <Span>{row.action}</Span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </Details>
        </TableWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default AgentPayment;
