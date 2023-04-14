import Info from "./Info";
import Performance from "./Performance";
import {
  Container,
  Left,
  Ref,
  Right,
  Wrapper,
  Wrapperr,
} from "./userGeneral.styles";
import Widget from "./WIdget";

const SamGeneral = ({ samji, userPerformance }) => {

    const sam = samji[0];

  return (
    <Container>
      <Left>
        <Wrapper>
          <Widget
            walletB={sam?.wallet}
            bonusB={sam?.bonus}
            agentC={sam?.agent_commision}
            mega={sam?.points}
          />
        </Wrapper>

        <Wrapper>
          <Info
            target={
              "Make up to 10 transactions to be eligible for an Agent and send a request mail to info@5starcompany.com.ng where you earn incentives on transactions done at the end of the month"
            }
            gnews={sam?.gnews}
          />
        </Wrapper>
      </Left>

      <Right>
        <Wrapperr width="70%">
          <Performance
            title={ '0'}
            data={ '0'}
            airtime={'0'}
            tv={'0'}
            card={'0'}
            checker={'0'}
          />
        </Wrapperr>
        <Ref>Referrals:</Ref>
      </Right>
    </Container>
  );
};

export default SamGeneral;
