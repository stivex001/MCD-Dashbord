import Navbar from "../../components/Bar/Navbar";
import Footer from "../../components/footer/Footer";
import { Desc, DescP, DescSpan, H3 } from "../transaction/transHistory.styles";

import {
  Container,
  Wrapper,
} from "../transaction/general.styles";

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
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Daily;
