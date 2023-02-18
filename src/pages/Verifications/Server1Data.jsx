import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Verify from "../../components/Verification/Verify";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Server1Data = () => {
  return (
<Container>
    <Topbar />
    <Wrapper>
      <Desc>
        <H3>Verification &gt; Server1 Data</H3>
        <DescP>
          Transaction / <DescSpan>Verification &gt; Server1 Data</DescSpan>
        </DescP>
      </Desc>
      <Verify />
    </Wrapper>

    <Footer />
  </Container>
  )
}

export default Server1Data