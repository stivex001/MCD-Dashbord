import { Info } from "@mui/icons-material";
import GeneralNews from "./GeneralNews";
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

const SearchGeneral = ({ searchUsers }) => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <Widget
            walletB={searchUsers.wallet}
            bonusB={searchUsers.bonus}
            agentC={searchUsers.agent_commision}
            mega={searchUsers.points}
          />
        </Wrapper>
        <Wrapper>
          <Info />
        </Wrapper>

        <Wrapper>
          <GeneralNews searchUsers={searchUsers} />
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

export default SearchGeneral;
