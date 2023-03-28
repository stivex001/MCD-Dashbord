import Info from "./Info";
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

const UserGeneral = () => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <InfoContainer>
            <InfoDesc>
              <InfoLeft>
                <P>#455</P>
                <Span>Wallet Balance</Span>
              </InfoLeft>
              <InfoRight>
                <P>#368</P>
                <Span>Bonus Balance</Span>
              </InfoRight>
            </InfoDesc>
            <InfoDesc>
              <InfoLeft>
                <P>#455</P>
                <Span>Agent Comm</Span>
              </InfoLeft>
              <InfoRight>
                <P>#368</P>
                <Span>Mega Points</Span>
              </InfoRight>
            </InfoDesc>
          </InfoContainer>
        </Wrapper>
        <Wrapper>
          <Info />
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
