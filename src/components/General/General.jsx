import styled from "styled-components";
import { tablet } from "../../responsive";
import Info from "./Info";
import Performance from "./Performance";
import Widget from "./WIdget";

const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 100%;
  ${tablet({ flexDirection: "column", gap: "0" })};
`;
const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
`;
const Wrapperr = styled.div`
  background-color: #fff;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1pxrgba (235, 180, 180, 0.47);
  padding: 20px;
  margin: 50px 0;
  ${tablet({ width: "70%" })};
`;
const Left = styled.div`
  flex: 1.2;
`;
const Right = styled.div`
  flex: 2;
`;
const Ref = styled.p`
  color: #333265;
  font-size: 14px;
`;

const General = () => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <Widget walletB="140" />
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

export default General;
