import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Verify from "../../components/Verification/Verify";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Server5 = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Verification &gt; Server5</H3>
          <DescP>
            Transaction / <DescSpan>Verification &gt; Server5</DescSpan>
          </DescP>
        </Desc>
        <Verify />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Server5;