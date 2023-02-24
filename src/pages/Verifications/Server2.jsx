import styled from "styled-components";
import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import Verify from "../../components/Verification/Verify";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div`
margin: 70px 0;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const Server2 = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Desc>
          <H3>Verification &gt; Server2</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Server2</DescSpan>
          </DescP>
        </Desc>
        <Verify />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Server2;
