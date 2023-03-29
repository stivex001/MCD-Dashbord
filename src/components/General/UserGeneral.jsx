import GeneralNews from "./GeneralNews";
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

const UserGeneral = ({ users }) => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <Widget
            walletB={users.wallet}
            bonusB={users.bonus}
            agentC={users.agent_commision}
            mega={users.points}
          />
        </Wrapper>
        <Wrapper>
          <Info />
        </Wrapper>

        <Wrapper>
          <GeneralNews users={users} />
        </Wrapper>
      </Left>
      <Right>
        <Wrapperr width="70%">
          <Performance />
        </Wrapperr>
        <Ref>Referrals:</Ref>
      </Right>
    </Container>
  );
};

export default UserGeneral;
