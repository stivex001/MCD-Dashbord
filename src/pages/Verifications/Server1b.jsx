import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import Verify from "../../components/Verification/Verify";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Server1b = () => {
  return (
    <Container>
    <Navbar/>
    <Wrapper>
      <Desc>
        <H3>Verification &gt; Server1b</H3>
        <DescP>
          Transaction / <DescSpan>Verification &gt; Server1b</DescSpan>
        </DescP>
      </Desc>
      <Verify />
    </Wrapper>

    <Footer />
  </Container>
  )
}

export default Server1b