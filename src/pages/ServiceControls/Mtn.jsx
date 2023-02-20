import styled from "styled-components";
import DataPlans from "../../components/DataPlansTable/DataPlans";
import Footer from "../../components/footer/Footer";
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

const Mtn = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Data Plans</H3>
          <DescP>
            Services / <DescSpan>Data Plans</DescSpan>
          </DescP>
        </Desc>
      </Wrapper>
      <TableWrapper>
        <P>Data Plans</P>
        <DataPlans
          id="id"
          network="Network"
          product="Product Name"
          price="Provider Price"
          yourPrice="Your Price"
          server="Server"
          status="Status"
          date="Date Modified"
          action="Action"
        />
      </TableWrapper>

      <Footer />
    </Container>
  );
};

export default Mtn;
