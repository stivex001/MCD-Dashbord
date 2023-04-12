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

const SearchGeneral = ({ searchUsers, userPerformance }) => {
  
  return (
    <Container>
      <Left>
        <Wrapper>
          <Widget
            walletB={searchUsers?.wallet.toLocaleString()}
            bonusB={searchUsers?.bonus}
            agentC={searchUsers?.agent_commision}
            mega={searchUsers?.points}
          />
        </Wrapper>

        <Wrapper>
          <Info
            target={
              "Make up to 10 transactions to be eligible for an Agent and send a request mail to info@5starcompany.com.ng where you earn incentives on transactions done at the end of the month"
            }
            gnews={searchUsers?.gnews}
          />
        </Wrapper>
      </Left>

      <Right>
        <Wrapperr width="70%">
          <Performance
            title={ '0'}
            data={'0'}
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

export default SearchGeneral;
