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

const UserGeneral = ({ users, userPerformance }) => {
  console.log(userPerformance)
  return (
    <Container>
      <Left>
        <Wrapper>
          <Widget
            walletB={users?.wallet}
            bonusB={users?.bonus}
            agentC={users?.agent_commision}
            mega={users?.points}
          />
        </Wrapper>

        <Wrapper>
          <Info
            target={
              "Make up to 10 transactions to be eligible for an Agent and send a request mail to info@5starcompany.com.ng where you earn incentives on transactions done at the end of the month"
            }
            gnews={users?.gnews}
          />
        </Wrapper>
      </Left>

      <Right>
        <Wrapperr width="70%">
          <Performance
            title={userPerformance?.perf || '0'}
            data={userPerformance?.data || '0'}
            airtime={userPerformance?.airtime || '0'}
            tv={userPerformance?.tv || '0'}
            card={userPerformance?.card || '0'}
            checker={userPerformance?.result || '0'}
          />
        </Wrapperr>
        <Ref>Referrals:</Ref>
      </Right>
    </Container>
  );
};

export default UserGeneral;
