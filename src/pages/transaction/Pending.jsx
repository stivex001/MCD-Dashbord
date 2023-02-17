import Topbar from "../../components/Topbar/Topbar";
import {
  Container,
  Desc,
  DescP,
  DescSpan,
  H3,
  Wrapper,
} from "./pending.styles";

const Pending = () => {
  return (
    <Container>
      <Topbar />
      <Wrapper>
        <Desc>
          <H3>Pending Transactions</H3>
          <DescP>
            Transactions / <DescSpan>Pending Transactions</DescSpan>
          </DescP>
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Pending;
