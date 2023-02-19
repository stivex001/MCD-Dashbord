import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import PaymentTable from "../../components/PaymentTable/PaymentTable";
import Topbar from "../../components/Topbar/Topbar";
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
const P = styled.p`
  font-size: 13px;
  color: #8c9ea9;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;
const BtnList = styled.ul`
  display: flex;
  gap: 1px;
`;
const BtnItem = styled.li`
list-style: none;
background-color: #aaaece;
  padding: 6px 12px;
  color: #fff;
`;
const Select = styled.select`
background-color: #aaaece;
color: #fff;
outline: none;
`;
const Option = styled.option`
font-size: 20px;
`;
const BarSearch = styled.div`
display: flex;
align-items: center;
gap: 5px;
`;
const Span = styled.span`
color: #636466;
font-size: 14px;
`;
const Input = styled.input`
padding: 4px 8px;
outline: none;
`;

const Payment = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Payment Links</H3>
          <DescP>
            User / <DescSpan>Payment Links</DescSpan>
          </DescP>
        </Desc>
      </Wrapper>
      <TableWrapper>
        <P>The List of payment links.</P>
        <BtnWrapper>
          <BtnList>
            <BtnItem>
              {" "}
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                Copy
              </Link>
            </BtnItem>

            <BtnItem>
              {" "}
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                Excel
              </Link>
            </BtnItem>
            <BtnItem>
              {" "}
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                PDF
              </Link>
            </BtnItem>
            <Select name="" id="">
              <Option value="">Column visibility</Option>
              <Option value="">Reseller Reference</Option>
              <Option value="">Amount</Option>
              <Option value="">Customer Email</Option>
              <Option value="">Reference</Option>
              <Option value="">Date</Option>
              <Option value="">Status</Option>
            </Select>
          </BtnList>
          <BarSearch>
            <Span>Search:</Span>
            <Input type="text" />
          </BarSearch>
        </BtnWrapper>
      </TableWrapper>

      {/* <PaymentTable /> */}
      <Footer />
    </Container>
  );
};

export default Payment;
