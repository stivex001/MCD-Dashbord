import GeneralNews from "./GeneralNews";
import Performance from "./Performance";
import {
  Container,
  InfoContainer,
  InfoDesc,
  InfoLeft,
  InfoRight,
  Left,
  P,
  Ref,
  Right,
  Span,
  Wrapper,
  Wrapperr,
} from "./userGeneral.styles";

const UserGeneral = ({users}) => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <InfoContainer>
            <InfoDesc>
              <InfoLeft>
                <P>&#8358;{users.wallet}</P>
                <Span>Wallet Balance</Span>
              </InfoLeft>
              <InfoRight>
                <P>&#8358;{users.bonus}</P>
                <Span>Bonus Balance</Span>
              </InfoRight>
            </InfoDesc>
            <InfoDesc>
              <InfoLeft>
                <P>&#8358;{users.agent_commision}</P>
                <Span>Agent Comm</Span>
              </InfoLeft>
              <InfoRight>
                <P>{users.points}</P>
                <Span>Mega Points</Span>
              </InfoRight>
            </InfoDesc>
          </InfoContainer>
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
