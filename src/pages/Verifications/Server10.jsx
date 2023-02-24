import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import Verify from "../../components/Verification/Verify";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Server10 = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Verification &gt; Server10</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Server10</DescSpan>
          </DescP>
        </Desc>
        <Verify />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Server10;
