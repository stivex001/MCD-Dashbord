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

const SearchGeneral = ({searchUsers}) => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <InfoContainer>
            <InfoDesc>
              <InfoLeft>
                <P>&#8358;{searchUsers?.wallet}</P>
                <Span>Wallet Balance</Span>
              </InfoLeft>
              <InfoRight>
                <P>&#8358;{searchUsers?.bonus}</P>
                <Span>Bonus Balance</Span>
              </InfoRight>
            </InfoDesc>
            <InfoDesc>
              <InfoLeft>
                <P>&#8358;{searchUsers?.agent_commision}</P>
                <Span>Agent Comm</Span>
              </InfoLeft>
              <InfoRight>
                <P>{searchUsers?.points}</P>
                <Span>Mega Points</Span>
              </InfoRight>
            </InfoDesc>
          </InfoContainer>
        </Wrapper>

        {/* <Wrapper>
          <GeneralNews searchUsers={searchUsers} />
        </Wrapper> */}

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
