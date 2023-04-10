import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

import { Container, Wrapper } from "../transaction/general.styles";
import styled from "styled-components";
import { EventAvailable, Search } from "@mui/icons-material";

const ReportWrapper = styled.div``;
const Left = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  height: 50%;
  width: 100%;
`;
const Right = styled.div`
  flex: 3;
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 16px;
  color: #4a4b4c;
  margin-bottom: 15px;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 0 20px;
  padding: 6px 12px;
  color: #fff;
  background: linear-gradient(to right, #5c62ae, #4088a9);
  cursor: pointer;
  border: none;
  border-radius: 2px;
  &:hover {
    color: #343a40;
    transition: all 0.5s;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  width: 100%;
  border-radius: 1px;
  border: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  outline-color: #d4d8e1;
  border: 1px solid #d4d8e1;
`;

const Daily = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Daily Report</H3>
          <DescP>
            Reports / <DescSpan>Daily Report</DescSpan>
          </DescP>
        </Desc>
        <ReportWrapper>
          <Left>
            <Title>Search</Title>
            <InputWrapper>
              <EventAvailable
                style={{ padding: "5px", fontSize: "30px", color: "#495057" }}
              />
              <Input type="date" />
            </InputWrapper>
            <Btn>
              <Search />
              Search
            </Btn>
          </Left>
          <Right>
            <Title>Daily Report for 10 April, 2023</Title>
            {/* <NotificationHistory /> */}
          </Right>
        </ReportWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Daily;
